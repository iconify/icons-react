import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrkvhnbmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrkvhnbmi"/>`,
		"fallback": "icons8:numerical-sorting-21",
	});
}

export default Component;
