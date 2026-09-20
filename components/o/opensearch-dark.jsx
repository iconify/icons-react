import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f67na1b8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f67na1b8g"/>`,
		"fallback": "selfhst:opensearch-dark",
	});
}

export default Component;
