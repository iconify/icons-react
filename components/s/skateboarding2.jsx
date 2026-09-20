import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vyiazc5tr.css';
import '../../css/s/svc_u102u.css';
import '../../css/k/k5ff91_ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vyiazc5tr"/><path class="svc_u102u"/><path clip-rule="evenodd" class="k5ff91_ht"/></g>`,
		"fallback": "reicon:skateboarding2",
	});
}

export default Component;
