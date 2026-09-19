import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmvotg30c.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmvotg30c"/><path class="f1ijkjbnr"/>`,
		"fallback": "carbon:license-draft",
	});
}

export default Component;
