import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcd46obdx.css';
import '../../css/j/jdsu42b0b.css';
import '../../css/e/exuhjy5ee.css';
import '../../css/b/b0o9zobuw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcd46obdx"/><circle class="jdsu42b0b"/><path class="exuhjy5ee"/><path class="b0o9zobuw"/>`,
		"fallback": "carbon:sys-provision",
	});
}

export default Component;
