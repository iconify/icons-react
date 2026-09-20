import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5y_5b-4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5y_5b-4h"/>`,
		"fallback": "thesvg-color:streamlabs",
	});
}

export default Component;
