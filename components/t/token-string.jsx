import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a45phhb8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a45phhb8f"/>`,
		"fallback": "oui:token-string",
	});
}

export default Component;
