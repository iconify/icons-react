import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxeoqfl9v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/j/jzu4mk7px.css';
import '../../css/p/pbup9yb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxeoqfl9v secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="jzu4mk7px"/><path class="pbup9yb2f"/></g>`,
		"fallback": "iconaut:shield-key-duo",
	});
}

export default Component;
