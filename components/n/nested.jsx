import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa-r_c5vz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa-r_c5vz"/>`,
		"fallback": "oui:nested",
	});
}

export default Component;
