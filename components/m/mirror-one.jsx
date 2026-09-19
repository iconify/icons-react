import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lg9f0hy7x.css';
import '../../css/a/a10evxbfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="lg9f0hy7x"/><path class="a10evxbfq"/></g>`,
		"fallback": "icon-park-outline:mirror-one",
	});
}

export default Component;
