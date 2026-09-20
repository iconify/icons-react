import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5yc1ib6b.css';
import '../../css/h/huno55bpx.css';
import '../../css/c/cuxq-5b7t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5yc1ib6b"/><path class="huno55bpx"/><path class="cuxq-5b7t"/>`,
		"fallback": "medical-icon:pharmacy",
	});
}

export default Component;
