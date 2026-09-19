import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4v87jbma.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4v87jbma"/>`,
		"fallback": "fluent-mdl2:undo",
	});
}

export default Component;
