import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/x/xfakk3bsf.css';
import '../../css/h/hhe4q6bge.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="xfakk3bsf"/><path class="hhe4q6bge"/>`,
		"fallback": "energy-icons:plus-circle-20-bold",
	});
}

export default Component;
