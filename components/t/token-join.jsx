import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpcok2zar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpcok2zar"/>`,
		"fallback": "oui:token-join",
	});
}

export default Component;
