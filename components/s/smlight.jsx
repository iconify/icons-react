import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1cxj__-m.css';
import '../../css/a/a5t35j_6j.css';
import '../../css/w/w3mbvw3se.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y1cxj__-m"/><circle class="a5t35j_6j"/><circle class="w3mbvw3se"/>`,
		"fallback": "selfhst:smlight",
	});
}

export default Component;
