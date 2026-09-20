import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plw3qfx0k.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plw3qfx0k"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:numbered-list-solid",
	});
}

export default Component;
