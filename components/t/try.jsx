import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tus8v7snr.css';

const viewBox = {"width":1152,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tus8v7snr"/>`,
		"fallback": "fa:try",
	});
}

export default Component;
