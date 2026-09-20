import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdcoovbta.css';

const viewBox = {"width":16,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdcoovbta"/>`,
		"fallback": "oui:kql-field",
	});
}

export default Component;
