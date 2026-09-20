import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8f-i9b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8f-i9b1b"/>`,
		"fallback": "streamline-sharp:paragraph-right-to-left-solid",
	});
}

export default Component;
