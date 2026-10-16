import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl870bc1m.css';
import '../../css/t/te3lkr3kc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl870bc1m"/><path class="te3lkr3kc"/>`,
		"fallback": "energy-icons:level-gauge-48",
	});
}

export default Component;
