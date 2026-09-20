import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvyox-byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uvyox-byp"/>`,
		"fallback": "streamline-sharp-color:text-bar-flat",
	});
}

export default Component;
