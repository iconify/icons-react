import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf5cnuy5b.css';
import '../../css/b/bi5-4wjkp.css';
import '../../css/i/ip-t4nauu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf5cnuy5b"/><path class="bi5-4wjkp"/><path class="ip-t4nauu"/>`,
		"fallback": "energy-icons:steel-mill-20-bold",
	});
}

export default Component;
