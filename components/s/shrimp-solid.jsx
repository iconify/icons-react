import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmwe6k33i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmwe6k33i"/>`,
		"fallback": "streamline:shrimp-solid",
	});
}

export default Component;
