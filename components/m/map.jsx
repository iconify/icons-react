import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuukbzbho.css';
import '../../css/x/xw75jrbbi.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuukbzbho"/><path class="xw75jrbbi"/>`,
		"fallback": "lineicons:map",
	});
}

export default Component;
