import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr_oyr2ju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr_oyr2ju"/>`,
		"fallback": "bi:suitcase-fill",
	});
}

export default Component;
