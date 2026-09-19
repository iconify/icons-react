import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esbpl1bxw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esbpl1bxw"/>`,
		"fallback": "catppuccin:nuxt",
	});
}

export default Component;
