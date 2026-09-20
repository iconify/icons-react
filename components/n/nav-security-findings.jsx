import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc0h2eget.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc0h2eget"/>`,
		"fallback": "oui:nav-security-findings",
	});
}

export default Component;
