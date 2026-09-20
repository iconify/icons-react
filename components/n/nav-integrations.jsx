import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8uuz3bwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8uuz3bwo"/>`,
		"fallback": "oui:nav-integrations",
	});
}

export default Component;
