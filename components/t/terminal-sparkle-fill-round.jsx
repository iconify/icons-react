import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovsmfxbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovsmfxbos"/>`,
		"fallback": "coolicons:terminal-sparkle-fill-round",
	});
}

export default Component;
