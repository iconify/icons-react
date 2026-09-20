import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k71zbv5lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k71zbv5lu"/>`,
		"fallback": "stash:list-ul-light",
	});
}

export default Component;
