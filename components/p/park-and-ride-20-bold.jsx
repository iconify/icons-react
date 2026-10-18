import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiz7ntixz.css';
import '../../css/p/pds76bc9q.css';
import '../../css/o/ov285yggp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiz7ntixz"/><path class="pds76bc9q"/><path class="ov285yggp"/>`,
		"fallback": "energy-icons:park-and-ride-20-bold",
	});
}

export default Component;
