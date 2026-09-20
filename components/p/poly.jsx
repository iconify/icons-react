import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-lmu0b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-lmu0b0d"/>`,
		"fallback": "token:poly",
	});
}

export default Component;
