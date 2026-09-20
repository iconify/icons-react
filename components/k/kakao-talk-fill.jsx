import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xglfi1bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xglfi1bww"/>`,
		"fallback": "mingcute:kakao-talk-fill",
	});
}

export default Component;
