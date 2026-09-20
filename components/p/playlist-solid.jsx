import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5vpj0gqk.css';
import '../../css/m/m87stabfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5vpj0gqk"/><path class="m87stabfo"/>`,
		"fallback": "pixel:playlist-solid",
	});
}

export default Component;
