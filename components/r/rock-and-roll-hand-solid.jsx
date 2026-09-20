import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcgr1exts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcgr1exts"/>`,
		"fallback": "streamline-sharp:rock-and-roll-hand-solid",
	});
}

export default Component;
