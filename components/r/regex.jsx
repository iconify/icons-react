import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k1f1ned0z.css';
import '../../css/e/ehcc4dbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k1f1ned0z"/><path class="ehcc4dbnh"/></g>`,
		"fallback": "withicons-bauhaus:regex",
	});
}

export default Component;
