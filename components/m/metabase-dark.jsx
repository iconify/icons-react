import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eni8eiben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eni8eiben"/>`,
		"fallback": "selfhst:metabase-dark",
	});
}

export default Component;
