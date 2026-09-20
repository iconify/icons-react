import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fry-ov_8f.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fry-ov_8f"/>`,
		"fallback": "lineicons:text-align-justify",
	});
}

export default Component;
