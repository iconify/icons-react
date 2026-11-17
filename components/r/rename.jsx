import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnn5r14mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnn5r14mc"/>`,
		"fallback": "codex:rename",
	});
}

export default Component;
