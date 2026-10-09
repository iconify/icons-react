import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdw3vx8xp.css';
import '../../css/j/jvw59ybyg.css';
import '../../css/z/ztv5co6ge.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdw3vx8xp"/><path class="jvw59ybyg"/><path class="ztv5co6ge"/>`,
		"fallback": "energy-icons:shield-x-20-bold",
	});
}

export default Component;
