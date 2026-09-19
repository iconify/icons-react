import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bac56-jdz.css';

const viewBox = {"width":1152,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bac56-jdz"/>`,
		"fallback": "fa:microphone",
	});
}

export default Component;
