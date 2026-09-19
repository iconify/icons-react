import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgph-8qhi.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i5r77abpp.css';
import '../../css/s/sbyl84brr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="pgph-8qhi"/><g class="md286fbip"><path class="i5r77abpp"/><path class="sbyl84brr"/></g></g>`,
		"fallback": "cryptocurrency-color:uma",
	});
}

export default Component;
