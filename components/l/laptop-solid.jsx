import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acui1gbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acui1gbob"/>`,
		"fallback": "pixel:laptop-solid",
	});
}

export default Component;
