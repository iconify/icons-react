import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jij--tp9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jij--tp9t"/>`,
		"fallback": "mingcute:mickeymouse-fill",
	});
}

export default Component;
