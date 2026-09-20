import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slqn7pbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slqn7pbsc"/>`,
		"fallback": "stash:megaphone-solid",
	});
}

export default Component;
