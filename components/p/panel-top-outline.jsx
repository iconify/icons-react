import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v75x9gbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v75x9gbll"/>`,
		"fallback": "solar:panel-top-outline",
	});
}

export default Component;
