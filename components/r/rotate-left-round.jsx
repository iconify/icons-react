import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6kzt5bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6kzt5bwv"/>`,
		"fallback": "coolicons:rotate-left-round",
	});
}

export default Component;
