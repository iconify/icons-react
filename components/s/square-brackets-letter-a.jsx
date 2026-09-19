import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fra-0totj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fra-0totj"/>`,
		"fallback": "gravity-ui:square-brackets-letter-a",
	});
}

export default Component;
