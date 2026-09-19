import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njyy8qbmd.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/k/k6t4853ju.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njyy8qbmd"/><circle class="f-ksdqydc"/><path class="k6t4853ju"/>`,
		"fallback": "carbon:location-person-filled",
	});
}

export default Component;
