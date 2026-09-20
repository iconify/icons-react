import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_s3ipqpk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_s3ipqpk"/>`,
		"fallback": "rivet-icons:undo",
	});
}

export default Component;
