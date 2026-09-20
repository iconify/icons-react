import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvo1e4bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wvo1e4bik"/>`,
		"fallback": "reicon:list-check",
	});
}

export default Component;
