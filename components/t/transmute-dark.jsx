import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl4enbc6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl4enbc6s"/>`,
		"fallback": "selfhst:transmute-dark",
	});
}

export default Component;
