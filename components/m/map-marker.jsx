import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyu6w7b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyu6w7b9i"/>`,
		"fallback": "majesticons:map-marker",
	});
}

export default Component;
