import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woaiz3jcj.css';
import '../../css/t/t2uupdbom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woaiz3jcj"/><path class="t2uupdbom"/>`,
		"fallback": "energy-icons:terminal-48-bold",
	});
}

export default Component;
