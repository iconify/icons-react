import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq9j02r9p.css';
import '../../css/d/dp_cy5b7g.css';
import '../../css/d/d3b9asbmq.css';
import '../../css/t/t04kq5blt.css';
import '../../css/e/eno3n2osn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pq9j02r9p"/><path class="dp_cy5b7g"/><path clip-rule="evenodd" class="d3b9asbmq"/><path class="t04kq5blt"/><circle transform="rotate(90 12 7.51)" class="eno3n2osn"/></g>`,
		"fallback": "andrsrxn:map-pin-area",
	});
}

export default Component;
