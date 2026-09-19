import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo31ksc3y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo31ksc3y"/>`,
		"fallback": "f7:search-circle",
	});
}

export default Component;
