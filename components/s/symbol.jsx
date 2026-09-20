import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/te-uuxths.css';
import '../../css/k/k6hcqfbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="te-uuxths"/><path vector-effect="non-scaling-stroke" class="k6hcqfbva"/></g>`,
		"fallback": "wordpress:symbol",
	});
}

export default Component;
