import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy71xu2ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy71xu2ad"/>`,
		"fallback": "codex:unlink",
	});
}

export default Component;
