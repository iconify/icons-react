import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s1990xb8r.css';
import '../../css/o/oiu-3i4pj.css';
import '../../css/s/s5n1v6bqp.css';
import '../../css/w/wwr7j0b1g.css';
import '../../css/p/p290x8bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s1990xb8r"/><path class="oiu-3i4pj"/><path class="s5n1v6bqp"/><path class="wwr7j0b1g"/><path class="p290x8bhj"/></g>`,
		"fallback": "hugeicons:lock-computer",
	});
}

export default Component;
