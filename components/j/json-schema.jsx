import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxygdpu6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxygdpu6t"/>`,
		"fallback": "catppuccin:json-schema",
	});
}

export default Component;
