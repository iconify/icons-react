import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cj6bbpb_o.css';
import '../../css/a/aw74w_bdz.css';
import '../../css/g/giqk6m29x.css';
import '../../css/r/rce7lrwge.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cj6bbpb_o"/><path class="aw74w_bdz"/><path class="giqk6m29x"/><path class="rce7lrwge"/></g>`,
		"fallback": "fluent-emoji-flat:page-facing-up",
	});
}

export default Component;
