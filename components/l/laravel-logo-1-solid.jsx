import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp6ua2ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bp6ua2ben"/>`,
		"fallback": "streamline-logos:laravel-logo-1-solid",
	});
}

export default Component;
