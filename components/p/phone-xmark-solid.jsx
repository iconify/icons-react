import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2qvr34yk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2qvr34yk"/>`,
		"fallback": "iconoir:phone-xmark-solid",
	});
}

export default Component;
