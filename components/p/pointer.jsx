import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqf_bmbfz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqf_bmbfz"/>`,
		"fallback": "vaadin:pointer",
	});
}

export default Component;
