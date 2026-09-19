import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aik43r5pi.css';
import '../../css/d/dl12cln-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aik43r5pi"/><path class="dl12cln-d"/>`,
		"fallback": "carbon:task-settings",
	});
}

export default Component;
