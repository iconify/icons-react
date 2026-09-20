import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwa1keyih.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwa1keyih"/>`,
		"fallback": "vaadin:paragraph",
	});
}

export default Component;
