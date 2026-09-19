import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxjg4076r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxjg4076r"/>`,
		"fallback": "dinkie-icons:monospaced",
	});
}

export default Component;
