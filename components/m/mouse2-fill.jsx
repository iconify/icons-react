import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf7of2bdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf7of2bdd"/>`,
		"fallback": "bi:mouse2-fill",
	});
}

export default Component;
