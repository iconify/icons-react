import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0bhnrrd.css';
import '../../css/w/wqubl0buo.css';
import '../../css/x/x_9_2pbcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to0bhnrrd"/><path class="wqubl0buo"/><path class="x_9_2pbcd"/>`,
		"fallback": "energy-icons:op-amp-20",
	});
}

export default Component;
