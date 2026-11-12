import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl2f_dlbg.css';
import '../../css/e/erolj7bif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl2f_dlbg"/><path class="erolj7bif"/>`,
		"fallback": "selfhst:ironcalc-light",
	});
}

export default Component;
