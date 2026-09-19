import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwtz2ebrr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rwtz2ebrr"/>`,
		"fallback": "heroicons:shield-exclamation-20-solid",
	});
}

export default Component;
