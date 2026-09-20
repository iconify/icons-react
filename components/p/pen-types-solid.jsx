import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6bhd7jxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6bhd7jxe"/>`,
		"fallback": "streamline-sharp:pen-types-solid",
	});
}

export default Component;
