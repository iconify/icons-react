import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xenep4tzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xenep4tzn"/>`,
		"fallback": "pixelarticons:sort-vertical",
	});
}

export default Component;
