import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlgy_-b2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nlgy_-b2g"/>`,
		"fallback": "pajamas:search",
	});
}

export default Component;
