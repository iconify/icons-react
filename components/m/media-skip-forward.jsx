import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izdt5_wln.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izdt5_wln"/>`,
		"fallback": "oi:media-skip-forward",
	});
}

export default Component;
