import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swxnh4qgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swxnh4qgt"/>`,
		"fallback": "coolicons:user-close-corner-fill-round",
	});
}

export default Component;
