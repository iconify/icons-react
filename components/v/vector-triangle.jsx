import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgx8uhb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgx8uhb9a"/>`,
		"fallback": "boxicons:vector-triangle",
	});
}

export default Component;
