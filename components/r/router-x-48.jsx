import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5a9blrh.css';
import '../../css/n/n-i0a3b8w.css';
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
		"content": `<path class="rv5a9blrh"/><path class="n-i0a3b8w"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:router-x-48",
	});
}

export default Component;
