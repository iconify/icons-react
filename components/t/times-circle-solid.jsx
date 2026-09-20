import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcd09qz-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcd09qz-h"/>`,
		"fallback": "stash:times-circle-solid",
	});
}

export default Component;
