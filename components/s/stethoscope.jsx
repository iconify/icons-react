import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbzv8sbul.css';

const viewBox = {"width":1408,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbzv8sbul"/>`,
		"fallback": "fa:stethoscope",
	});
}

export default Component;
