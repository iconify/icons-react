import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xox_g4bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xox_g4bzz"/>`,
		"fallback": "heroicons-outline:signal-slash",
	});
}

export default Component;
