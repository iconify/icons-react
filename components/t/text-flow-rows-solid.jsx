import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drej47b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="drej47b5h"/>`,
		"fallback": "streamline-sharp:text-flow-rows-solid",
	});
}

export default Component;
