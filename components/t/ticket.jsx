import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezz8hjg-s.css';
import '../../css/u/uj_v03r8a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezz8hjg-s"/><path class="uj_v03r8a"/>`,
		"fallback": "vaadin:ticket",
	});
}

export default Component;
