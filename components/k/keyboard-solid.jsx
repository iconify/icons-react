import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvzq53buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zvzq53buw"/>`,
		"fallback": "sidekickicons:keyboard-solid",
	});
}

export default Component;
