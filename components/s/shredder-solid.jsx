import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj2v5po7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aj2v5po7u"/>`,
		"fallback": "streamline-sharp:shredder-solid",
	});
}

export default Component;
