import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hx_x1u4zp.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/i/i89cnpc-t.css';
import '../../css/i/i9h0qubza.css';

const viewBox = {"width":96,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hx_x1u4zp"/><g class="n1mjunbsu"><path class="i89cnpc-t"/><path class="i9h0qubza"/></g></g>`,
		"fallback": "cryptocurrency-color:kmd",
	});
}

export default Component;
