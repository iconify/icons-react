import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zx9jrfvbo.css';
import '../../css/k/kivgqhb0o.css';
import '../../css/j/j0kc2sbhe.css';
import '../../css/x/xsxarnrrl.css';
import '../../css/e/e3f52yb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zx9jrfvbo"/><path class="kivgqhb0o wm-shadow"/><path class="j0kc2sbhe"/><path class="xsxarnrrl"/><path class="e3f52yb-s"/></g>`,
		"fallback": "withicons-brutal:spy",
	});
}

export default Component;
