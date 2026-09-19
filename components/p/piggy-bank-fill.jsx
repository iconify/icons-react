import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm3iwqbce.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm3iwqbce"/>`,
		"fallback": "bi:piggy-bank-fill",
	});
}

export default Component;
