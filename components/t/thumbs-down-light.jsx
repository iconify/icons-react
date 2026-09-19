import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0vfteiqp.css';
import '../../css/j/js6cich6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s0vfteiqp"/><path class="js6cich6v"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-down-light",
	});
}

export default Component;
