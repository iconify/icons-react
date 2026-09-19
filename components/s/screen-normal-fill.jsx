import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1-th0bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1-th0bkw"/>`,
		"fallback": "iconamoon:screen-normal-fill",
	});
}

export default Component;
