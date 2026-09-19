import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1cbjxi4x.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1cbjxi4x"/>`,
		"fallback": "fa-solid:laugh-wink",
	});
}

export default Component;
