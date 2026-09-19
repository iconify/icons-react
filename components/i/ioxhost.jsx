import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbz05ihlt.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbz05ihlt"/>`,
		"fallback": "fa6-brands:ioxhost",
	});
}

export default Component;
