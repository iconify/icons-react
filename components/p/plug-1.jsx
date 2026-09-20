import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpzcypbcy.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpzcypbcy"/>`,
		"fallback": "lineicons:plug-1",
	});
}

export default Component;
