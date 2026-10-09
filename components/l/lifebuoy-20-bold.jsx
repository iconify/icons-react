import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/a/amkw-8txf.css';
import '../../css/a/ag55hdbsy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="amkw-8txf"/><path class="ag55hdbsy"/>`,
		"fallback": "energy-icons:lifebuoy-20-bold",
	});
}

export default Component;
