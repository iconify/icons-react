import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3bwx9b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3bwx9b9p"/>`,
		"fallback": "pixelarticons:settings-cog",
	});
}

export default Component;
