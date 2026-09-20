import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b16z9cbwi.css';
import '../../css/e/eihi2zo4h.css';

const viewBox = {"width":48.3,"height":48.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><circle class="b16z9cbwi"/><path class="eihi2zo4h"/></g>`,
		"fallback": "thesvg-color:locofy",
	});
}

export default Component;
