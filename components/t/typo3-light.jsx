import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-bo3ibyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-bo3ibyd"/>`,
		"fallback": "selfhst:typo3-light",
	});
}

export default Component;
