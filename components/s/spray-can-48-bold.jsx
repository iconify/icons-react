import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z46p_cexp.css';
import '../../css/k/k0mqbqbfv.css';
import '../../css/j/j2mvxkhzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z46p_cexp"/><path class="k0mqbqbfv"/><path class="j2mvxkhzf"/>`,
		"fallback": "energy-icons:spray-can-48-bold",
	});
}

export default Component;
