import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni6nc-c3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni6nc-c3j"/>`,
		"fallback": "ri:pencil-ruler-2-fill",
	});
}

export default Component;
