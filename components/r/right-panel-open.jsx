import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-3s-3ndv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-3s-3ndv"/>`,
		"fallback": "carbon:right-panel-open",
	});
}

export default Component;
