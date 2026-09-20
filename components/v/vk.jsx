import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpd_lfb3j.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpd_lfb3j"/>`,
		"fallback": "picon:vk",
	});
}

export default Component;
