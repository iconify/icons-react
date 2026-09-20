import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw_2ghb4z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw_2ghb4z"/>`,
		"fallback": "roentgen:power-pole-3-level",
	});
}

export default Component;
