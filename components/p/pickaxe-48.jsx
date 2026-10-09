import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf2mm_--c.css';
import '../../css/k/kr_fs7b3w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf2mm_--c"/><path class="kr_fs7b3w"/>`,
		"fallback": "energy-icons:pickaxe-48",
	});
}

export default Component;
