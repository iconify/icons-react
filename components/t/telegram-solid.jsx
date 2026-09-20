import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7c4cgm0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f7c4cgm0y"/>`,
		"fallback": "stash:telegram-solid",
	});
}

export default Component;
