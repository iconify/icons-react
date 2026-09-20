import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnddjeb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnddjeb0n"/>`,
		"fallback": "stash:user-avatar-light",
	});
}

export default Component;
