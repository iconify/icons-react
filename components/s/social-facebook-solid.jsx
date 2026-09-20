import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/najg4qvqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="najg4qvqj"/>`,
		"fallback": "stash:social-facebook-solid",
	});
}

export default Component;
