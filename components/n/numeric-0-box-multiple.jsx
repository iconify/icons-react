import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3ctc8bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3ctc8bln"/>`,
		"fallback": "mdi:numeric-0-box-multiple",
	});
}

export default Component;
