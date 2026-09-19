import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boeyg5zgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boeyg5zgh"/>`,
		"fallback": "bx:radio-circle",
	});
}

export default Component;
