import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jewwt-x9z.css';
import '../../css/w/wvbr6fbby.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/d/d51dg7lbe.css';
import '../../css/q/qy8baw-ee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jewwt-x9z"/><path class="wvbr6fbby"/><g class="wtfmx7b3v"><path class="d51dg7lbe"/><path class="qy8baw-ee"/></g>`,
		"fallback": "flat-color-icons:lock-portrait",
	});
}

export default Component;
