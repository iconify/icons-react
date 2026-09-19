import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iucujub-t.css';
import '../../css/v/vqnxb9n8y.css';
import '../../css/t/tovf0wb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iucujub-t"/><path class="vqnxb9n8y"/><path class="tovf0wb6q"/></g>`,
		"fallback": "iconamoon:shopping-card-remove-light",
	});
}

export default Component;
