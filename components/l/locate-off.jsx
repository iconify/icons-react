import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1d8xacfz.css';
import '../../css/v/v3p8xz5ob.css';
import '../../css/l/lzxz9sbci.css';
import '../../css/a/ag_-vpl8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u1d8xacfz"/><circle transform="rotate(90 12 12)" class="v3p8xz5ob"/><circle transform="rotate(90 12 12)" class="lzxz9sbci"/><path class="ag_-vpl8d"/></g>`,
		"fallback": "andrsrxn:locate-off",
	});
}

export default Component;
