import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj17dhbez.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj17dhbez"/>`,
		"fallback": "pinhead:ordnance-survey-benchmark",
	});
}

export default Component;
