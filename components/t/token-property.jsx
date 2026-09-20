import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6oxynubr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6oxynubr"/>`,
		"fallback": "oui:token-property",
	});
}

export default Component;
