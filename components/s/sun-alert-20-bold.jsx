import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksqrfbb0k.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/d/d0igczcjx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksqrfbb0k"/><path class="aqsnv9bnd"/><path class="d0igczcjx"/>`,
		"fallback": "energy-icons:sun-alert-20-bold",
	});
}

export default Component;
