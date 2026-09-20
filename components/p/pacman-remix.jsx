import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd8rjt12r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bd8rjt12r"/>`,
		"fallback": "streamline-plump:pacman-remix",
	});
}

export default Component;
