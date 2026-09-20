import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4w9bbse.css';
import '../../css/k/k-gdp-2hr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4w9bbse"/><path class="k-gdp-2hr"/>`,
		"fallback": "material-icon-theme:pnpm",
	});
}

export default Component;
