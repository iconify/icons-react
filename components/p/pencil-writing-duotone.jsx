import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1cyrmb8e.css';
import '../../css/m/mvssxhbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1cyrmb8e"/><path class="mvssxhbia"/>`,
		"fallback": "stash:pencil-writing-duotone",
	});
}

export default Component;
