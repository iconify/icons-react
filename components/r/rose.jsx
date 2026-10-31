import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fsy463l9m.css';
import '../../css/m/m1m4bkbuj.css';
import '../../css/j/j314kuthn.css';
import '../../css/l/lu_jwkbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fsy463l9m"/><path class="m1m4bkbuj wm-k"/><path class="j314kuthn wm-a"/><path class="lu_jwkbsc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:rose",
	});
}

export default Component;
