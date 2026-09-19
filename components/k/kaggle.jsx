import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mskz4lbne.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mskz4lbne"/>`,
		"fallback": "cib:kaggle",
	});
}

export default Component;
