import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axvz_9b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axvz_9b4h"/>`,
		"fallback": "noviair:shield-question",
	});
}

export default Component;
