import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a99q0yb7p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a99q0yb7p"/>`,
		"fallback": "garden:translation-outdated-fill-12",
	});
}

export default Component;
