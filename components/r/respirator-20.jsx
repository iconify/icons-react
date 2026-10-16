import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz333ohex.css';
import '../../css/t/tavztwb7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz333ohex"/><path class="tavztwb7l"/>`,
		"fallback": "energy-icons:respirator-20",
	});
}

export default Component;
