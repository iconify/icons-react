import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivro_3fld.css';
import '../../css/l/l6qh78cyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivro_3fld"/><path class="l6qh78cyh"/>`,
		"fallback": "vaadin:pie-chart",
	});
}

export default Component;
