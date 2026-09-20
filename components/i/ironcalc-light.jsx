import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f00tbez2j.css';
import '../../css/e/erolj7bif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f00tbez2j"/><path class="erolj7bif"/>`,
		"fallback": "selfhst:ironcalc-light",
	});
}

export default Component;
