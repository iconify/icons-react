import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeqn9cblo.css';
import '../../css/r/rauwxcb1r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeqn9cblo"/><path class="rauwxcb1r"/>`,
		"fallback": "carbon:volume-object-storage",
	});
}

export default Component;
