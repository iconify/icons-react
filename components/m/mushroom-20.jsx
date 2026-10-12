import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prt_k_bso.css';
import '../../css/k/koi711brx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prt_k_bso"/><path class="koi711brx"/>`,
		"fallback": "energy-icons:mushroom-20",
	});
}

export default Component;
