import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ldjhm2bpx.css';
import '../../css/l/lu_jwkbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ldjhm2bpx"/><path class="lu_jwkbsc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sigma",
	});
}

export default Component;
