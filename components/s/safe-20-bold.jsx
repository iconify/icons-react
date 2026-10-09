import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_-74wdkk.css';
import '../../css/a/a5lgi4lwe.css';
import '../../css/t/t15dg5mzj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_-74wdkk"/><path class="a5lgi4lwe"/><path class="t15dg5mzj"/>`,
		"fallback": "energy-icons:safe-20-bold",
	});
}

export default Component;
