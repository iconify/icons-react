import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciy5fzbxp.css';
import '../../css/a/apq2fzbyn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciy5fzbxp"/><path class="apq2fzbyn"/>`,
		"fallback": "energy-icons:sun-bolt-20",
	});
}

export default Component;
