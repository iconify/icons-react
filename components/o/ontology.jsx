import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-37_lbpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-37_lbpm"/>`,
		"fallback": "ix:ontology",
	});
}

export default Component;
