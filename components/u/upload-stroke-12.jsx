import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf-49vp4s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf-49vp4s"/>`,
		"fallback": "garden:upload-stroke-12",
	});
}

export default Component;
