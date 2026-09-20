import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lez7u-jzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lez7u-jzv"/>`,
		"fallback": "token:tenet",
	});
}

export default Component;
