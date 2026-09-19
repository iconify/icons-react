import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t20u6eccm.css';
import '../../css/y/yrtryqu9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t20u6eccm"/><path class="yrtryqu9x"/>`,
		"fallback": "bx:microphone",
	});
}

export default Component;
