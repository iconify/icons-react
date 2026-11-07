import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5j52ibul.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i5j52ibul"/>`,
		"fallback": "sidekickicons:plug-16-solid",
	});
}

export default Component;
