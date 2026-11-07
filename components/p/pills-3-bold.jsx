import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7y8ln4oe.css';
import '../../css/o/omloi9b0w.css';
import '../../css/z/z58pd3mxw.css';
import '../../css/m/mk28-wb2e.css';
import '../../css/j/jrsnf1igu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7y8ln4oe"/><path class="omloi9b0w"/><path class="z58pd3mxw"/><path class="mk28-wb2e"/><path class="jrsnf1igu"/>`,
		"fallback": "solar:pills-3-bold",
	});
}

export default Component;
