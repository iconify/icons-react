import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wn9qzm3vj.css';
import '../../css/v/v1x1grbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wn9qzm3vj"/><path clip-rule="evenodd" class="v1x1grbqp"/></g>`,
		"fallback": "streamline-logos:wear-os-logo",
	});
}

export default Component;
