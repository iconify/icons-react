import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7-hg3k7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7-hg3k7g"/>`,
		"fallback": "pixelarticons:letter-s",
	});
}

export default Component;
