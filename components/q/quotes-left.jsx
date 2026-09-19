import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8hjx9bcf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8hjx9bcf"/>`,
		"fallback": "icomoon-free:quotes-left",
	});
}

export default Component;
