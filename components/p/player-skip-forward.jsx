import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giu7wm7zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giu7wm7zs"/>`,
		"fallback": "tabler:player-skip-forward",
	});
}

export default Component;
