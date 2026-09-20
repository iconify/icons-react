import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cinn_rb7o.css';
import '../../css/e/eqib9ab7h.css';
import '../../css/e/emg1d3bru.css';
import '../../css/c/cujes7b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cinn_rb7o"/><path class="eqib9ab7h"/><path class="emg1d3bru"/><path class="cujes7b_s"/>`,
		"fallback": "streamline-ultimate:ranking-people-first-bold",
	});
}

export default Component;
