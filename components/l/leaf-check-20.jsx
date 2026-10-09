import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su2fj2bbc.css';
import '../../css/k/ksiw30c1e.css';
import '../../css/g/g8-7we8zc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su2fj2bbc"/><path class="ksiw30c1e"/><path class="g8-7we8zc"/>`,
		"fallback": "energy-icons:leaf-check-20",
	});
}

export default Component;
