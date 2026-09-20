import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/p/p08xjh-1m.css';
import '../../css/q/q8js2-52e.css';
import '../../css/e/e8t6j1b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j697l3uzc"/><path class="p08xjh-1m"/><path class="q8js2-52e"/><path class="e8t6j1b3a"/></g>`,
		"fallback": "streamline-logos:proto-io-logo-2",
	});
}

export default Component;
