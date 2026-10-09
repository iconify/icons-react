import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnl2ysb4i.css';
import '../../css/x/xe8w9nb7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnl2ysb4i"/><path class="xe8w9nb7g"/>`,
		"fallback": "energy-icons:oscilloscope-20",
	});
}

export default Component;
