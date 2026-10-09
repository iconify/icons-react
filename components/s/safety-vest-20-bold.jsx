import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9-064bdl.css';
import '../../css/l/lxjm5vb4n.css';
import '../../css/n/n61va8bab.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9-064bdl"/><path class="lxjm5vb4n"/><path class="n61va8bab"/>`,
		"fallback": "energy-icons:safety-vest-20-bold",
	});
}

export default Component;
