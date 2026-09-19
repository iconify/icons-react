import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2u4dz6lg.css';
import '../../css/t/t6wjn2ega.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2u4dz6lg"/><path clip-rule="evenodd" class="t6wjn2ega"/>`,
		"fallback": "basil:reddit-outline",
	});
}

export default Component;
