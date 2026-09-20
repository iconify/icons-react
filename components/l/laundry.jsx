import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa-2tbcpa.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa-2tbcpa"/>`,
		"fallback": "temaki:laundry",
	});
}

export default Component;
