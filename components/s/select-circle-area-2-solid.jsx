import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2bz9sbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2bz9sbyh"/>`,
		"fallback": "streamline-sharp:select-circle-area-2-solid",
	});
}

export default Component;
