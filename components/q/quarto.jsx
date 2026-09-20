import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti1uxtajd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path paint-order="stroke fill markers" class="ti1uxtajd"/>`,
		"fallback": "material-icon-theme:quarto",
	});
}

export default Component;
