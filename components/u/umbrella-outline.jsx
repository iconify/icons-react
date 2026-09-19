import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkp9uh0fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xkp9uh0fd"/>`,
		"fallback": "basil:umbrella-outline",
	});
}

export default Component;
