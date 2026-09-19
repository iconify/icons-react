import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku3wncb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ku3wncb8y"/>`,
		"fallback": "iconamoon:lightning-1-fill",
	});
}

export default Component;
