import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxuje6u-t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxuje6u-t"/>`,
		"fallback": "bi:vr",
	});
}

export default Component;
