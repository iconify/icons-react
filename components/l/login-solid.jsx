import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvc94accg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvc94accg"/>`,
		"fallback": "pixel:login-solid",
	});
}

export default Component;
