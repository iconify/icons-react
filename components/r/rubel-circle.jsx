import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myf97jsmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myf97jsmx"/>`,
		"fallback": "majesticons:rubel-circle",
	});
}

export default Component;
