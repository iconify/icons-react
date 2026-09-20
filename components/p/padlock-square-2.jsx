import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x7ltavisy.css';
import '../../css/m/mr18rk-et.css';
import '../../css/m/m3801cbxt.css';
import '../../css/u/upzrtq2cm.css';
import '../../css/x/x3zjklbvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="x7ltavisy"/><path class="mr18rk-et"/><path class="m3801cbxt"/><path class="upzrtq2cm"/><path class="x3zjklbvc"/></g>`,
		"fallback": "streamline-plump-color:padlock-square-2",
	});
}

export default Component;
