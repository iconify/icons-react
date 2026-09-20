import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcrt57btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcrt57btr"/>`,
		"fallback": "tabler:spy-off",
	});
}

export default Component;
