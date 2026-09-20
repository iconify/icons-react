import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz6mnac-c.css';
import '../../css/k/k-gdp-2hr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz6mnac-c"/><path class="k-gdp-2hr"/>`,
		"fallback": "material-icon-theme:pnpm-light",
	});
}

export default Component;
