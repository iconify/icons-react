import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iucujub-t.css';
import '../../css/k/k7vrub--i.css';
import '../../css/t/tovf0wb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iucujub-t"/><path class="k7vrub--i"/><path class="tovf0wb6q"/></g>`,
		"fallback": "iconamoon:shopping-card-add-light",
	});
}

export default Component;
