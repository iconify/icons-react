import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci8phsb1v.css';
import '../../css/r/rzz4edc1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci8phsb1v"/><path class="rzz4edc1o"/>`,
		"fallback": "garden:megaphone-stroke-16",
	});
}

export default Component;
