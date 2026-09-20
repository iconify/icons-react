import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lopm3jv9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lopm3jv9k"/>`,
		"fallback": "streamline-logos:meta-cafe-logo-solid",
	});
}

export default Component;
