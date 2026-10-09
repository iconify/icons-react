import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj0lqmb_y.css';
import '../../css/t/t8icqb2ug.css';
import '../../css/a/abqew6ljc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj0lqmb_y"/><path class="t8icqb2ug"/><path class="abqew6ljc"/>`,
		"fallback": "energy-icons:lng-ship-20",
	});
}

export default Component;
