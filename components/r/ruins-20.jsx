import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxazbfr.css';
import '../../css/g/g69-1dbht.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxazbfr"/><path class="g69-1dbht"/>`,
		"fallback": "energy-icons:ruins-20",
	});
}

export default Component;
