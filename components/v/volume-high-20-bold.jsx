import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrjlwqjtj.css';
import '../../css/a/au4v49w_v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrjlwqjtj"/><path class="au4v49w_v"/>`,
		"fallback": "energy-icons:volume-high-20-bold",
	});
}

export default Component;
