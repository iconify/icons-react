import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmogy0_2h.css';
import '../../css/h/hd7l-yb7d.css';
import '../../css/h/hedj3bbrm.css';
import '../../css/q/q4ruv6dkh.css';
import '../../css/w/wnu_hcbxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xmogy0_2h"/><circle class="hd7l-yb7d"/><circle class="hedj3bbrm"/><path clip-rule="evenodd" class="q4ruv6dkh"/><circle class="xmogy0_2h"/><circle class="hd7l-yb7d"/><circle class="hedj3bbrm"/><path clip-rule="evenodd" class="wnu_hcbxb"/></g>`,
		"fallback": "pepicons:text-bubble",
	});
}

export default Component;
