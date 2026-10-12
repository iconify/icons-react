import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzy9e1bsg.css';
import '../../css/c/c_a48h94z.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzy9e1bsg"/><path class="c_a48h94z"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:mail-x-48",
	});
}

export default Component;
