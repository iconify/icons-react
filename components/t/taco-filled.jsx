import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uya9hk5sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uya9hk5sf"/>`,
		"fallback": "boxicons:taco-filled",
	});
}

export default Component;
