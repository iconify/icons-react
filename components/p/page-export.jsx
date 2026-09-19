import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n58o9b3sw.css';
import '../../css/q/qsljfib0o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n58o9b3sw"/><path class="qsljfib0o"/>`,
		"fallback": "foundation:page-export",
	});
}

export default Component;
