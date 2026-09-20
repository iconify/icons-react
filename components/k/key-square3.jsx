import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4g7y2bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4g7y2bqo"/>`,
		"fallback": "reicon:key-square3",
	});
}

export default Component;
