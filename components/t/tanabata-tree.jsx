import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6ikzsf_v.css';
import '../../css/t/t9na1qb7g.css';
import '../../css/y/ym8-u3b_o.css';
import '../../css/g/griw_lbaa.css';
import '../../css/w/w62qucbcf.css';
import '../../css/f/fal-8hbog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6ikzsf_v"/><path class="t9na1qb7g"/><path class="ym8-u3b_o"/><path class="griw_lbaa"/><path class="w62qucbcf"/><path class="fal-8hbog"/></g>`,
		"fallback": "fluent-emoji-flat:tanabata-tree",
	});
}

export default Component;
