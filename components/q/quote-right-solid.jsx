import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnz6y9byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnz6y9byx"/>`,
		"fallback": "pixel:quote-right-solid",
	});
}

export default Component;
