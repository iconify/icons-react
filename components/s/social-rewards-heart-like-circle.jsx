import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag2g7gv9d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag2g7gv9d"/>`,
		"fallback": "streamline-pixel:social-rewards-heart-like-circle",
	});
}

export default Component;
