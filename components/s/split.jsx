import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dzlq0sb-b.css';
import '../../css/d/d9xn-ccwj.css';
import '../../css/u/ul-tx9b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dzlq0sb-b wm-k"/><path class="d9xn-ccwj wm-a"/><path class="ul-tx9b-t wm-deco"/></g>`,
		"fallback": "withicons-kawaii:split",
	});
}

export default Component;
