import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbnekz-ss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbnekz-ss"/>`,
		"fallback": "selfhst:typo3",
	});
}

export default Component;
