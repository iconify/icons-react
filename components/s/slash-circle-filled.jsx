import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo5247bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lo5247bgy"/>`,
		"fallback": "reicon:slash-circle-filled",
	});
}

export default Component;
