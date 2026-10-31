import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhwqw6bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhwqw6bfx"/>`,
		"fallback": "coolicons:panel-bottom-fill-round",
	});
}

export default Component;
