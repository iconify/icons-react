import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wod8oip1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wod8oip1p"/>`,
		"fallback": "token:stacks",
	});
}

export default Component;
