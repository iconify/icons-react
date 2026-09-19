import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g9w75jc3n.css';
import '../../css/y/yqxucbc0n.css';
import '../../css/m/m4wir9t-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="g9w75jc3n"/><path class="yqxucbc0n"/><path class="m4wir9t-b"/></g>`,
		"fallback": "icon-park-solid:volume-notice",
	});
}

export default Component;
