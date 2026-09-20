import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjx1jgzfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjx1jgzfs"/>`,
		"fallback": "stash:list-ul-duotone",
	});
}

export default Component;
