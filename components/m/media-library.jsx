import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-01x7gco.css';
import '../../css/e/e2rfzjbzi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-01x7gco"/><path class="e2rfzjbzi"/>`,
		"fallback": "carbon:media-library",
	});
}

export default Component;
