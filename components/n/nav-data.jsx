import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejgfz-b4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejgfz-b4p"/>`,
		"fallback": "oui:nav-data",
	});
}

export default Component;
