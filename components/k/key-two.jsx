import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/x7jgcmbxq.css';
import '../../css/v/vbi6qvbrt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="x7jgcmbxq"/><path class="vbi6qvbrt"/></g>`,
		"fallback": "icon-park-outline:key-two",
	});
}

export default Component;
