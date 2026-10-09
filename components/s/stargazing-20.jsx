import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i33xfsc3n.css';
import '../../css/k/k3w3y09sg.css';
import '../../css/u/u1fsh4agr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i33xfsc3n"/><path class="k3w3y09sg"/><path class="u1fsh4agr"/>`,
		"fallback": "energy-icons:stargazing-20",
	});
}

export default Component;
