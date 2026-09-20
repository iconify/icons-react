import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eagqxlbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eagqxlbet"/>`,
		"fallback": "lucide:rotate-cw-fading-clock",
	});
}

export default Component;
