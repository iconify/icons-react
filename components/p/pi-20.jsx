import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdqwsub7z.css';
import '../../css/i/iz3j3vbkj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdqwsub7z"/><path class="iz3j3vbkj"/>`,
		"fallback": "energy-icons:pi-20",
	});
}

export default Component;
