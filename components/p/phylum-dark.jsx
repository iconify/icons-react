import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5q7p6dir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5q7p6dir"/>`,
		"fallback": "selfhst:phylum-dark",
	});
}

export default Component;
