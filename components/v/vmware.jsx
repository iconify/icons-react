import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmiv2pbgq.css';
import '../../css/v/vh-56ab7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmiv2pbgq"/><path class="vh-56ab7b"/>`,
		"fallback": "lineicons:vmware",
	});
}

export default Component;
