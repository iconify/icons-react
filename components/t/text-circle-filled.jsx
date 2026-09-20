import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izbfeq86f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="izbfeq86f"/>`,
		"fallback": "reicon:text-circle-filled",
	});
}

export default Component;
