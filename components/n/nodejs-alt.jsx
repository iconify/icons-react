import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhb4zef1o.css';
import '../../css/y/yd_4pqb_b.css';
import '../../css/d/di3r7bqli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhb4zef1o"/><path class="yd_4pqb_b"/><path class="di3r7bqli"/>`,
		"fallback": "material-icon-theme:nodejs-alt",
	});
}

export default Component;
