import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkxv-k3lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkxv-k3lx"/>`,
		"fallback": "stash:shrink-vertical-solid",
	});
}

export default Component;
