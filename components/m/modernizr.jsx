import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv65n-s5o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv65n-s5o"/>`,
		"fallback": "material-icon-theme:modernizr",
	});
}

export default Component;
