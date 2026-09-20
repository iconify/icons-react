import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7v-jdddk.css';
import '../../css/u/u_mpeiija.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7v-jdddk"/><path class="u_mpeiija"/>`,
		"fallback": "vaadin:tags",
	});
}

export default Component;
