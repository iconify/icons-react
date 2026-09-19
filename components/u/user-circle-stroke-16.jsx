import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urswrcbmq.css';
import '../../css/o/o9qorwb2l.css';
import '../../css/s/szave0bqs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="urswrcbmq"/><circle class="o9qorwb2l"/><path class="szave0bqs"/></g>`,
		"fallback": "garden:user-circle-stroke-16",
	});
}

export default Component;
