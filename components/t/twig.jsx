import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnk6u5eey.css';
import '../../css/s/sd_7wj8_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnk6u5eey"/><path class="sd_7wj8_z"/>`,
		"fallback": "catppuccin:twig",
	});
}

export default Component;
