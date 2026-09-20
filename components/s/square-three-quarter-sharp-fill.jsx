import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2dklhm6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2dklhm6z"/>`,
		"fallback": "keyline-icons:square-three-quarter-sharp-fill",
	});
}

export default Component;
