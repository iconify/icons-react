import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci6l0phtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci6l0phtr"/>`,
		"fallback": "solar:receive-twice-square-bold",
	});
}

export default Component;
