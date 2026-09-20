import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws8ax8b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws8ax8b7w"/>`,
		"fallback": "mdi:vector-point-add",
	});
}

export default Component;
