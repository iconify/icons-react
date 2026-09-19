import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmvd4q53w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmvd4q53w"/>`,
		"fallback": "carbon:network-1",
	});
}

export default Component;
