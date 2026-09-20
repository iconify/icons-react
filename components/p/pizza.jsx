import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvt68wnkp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvt68wnkp"/>`,
		"fallback": "lineicons:pizza",
	});
}

export default Component;
