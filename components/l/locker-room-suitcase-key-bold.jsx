import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnrexiitu.css';
import '../../css/h/hzmc-yyoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnrexiitu"/><path class="hzmc-yyoj"/>`,
		"fallback": "streamline-ultimate:locker-room-suitcase-key-bold",
	});
}

export default Component;
