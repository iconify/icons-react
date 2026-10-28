import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y3uynx5-a.css';
import '../../css/e/exv7xp9oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y3uynx5-a"/><path class="exv7xp9oy"/></g>`,
		"fallback": "codex:refresh",
	});
}

export default Component;
