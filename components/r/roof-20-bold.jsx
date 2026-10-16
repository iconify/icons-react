import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmcqeehhi.css';
import '../../css/y/y8kfksbep.css';
import '../../css/j/jr6n55b6j.css';
import '../../css/o/ot0zf9b5v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmcqeehhi"/><path class="y8kfksbep"/><path class="jr6n55b6j"/><path class="ot0zf9b5v"/>`,
		"fallback": "energy-icons:roof-20-bold",
	});
}

export default Component;
