import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohqg1ybsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ohqg1ybsk"/>`,
		"fallback": "reicon:watch3-filled",
	});
}

export default Component;
