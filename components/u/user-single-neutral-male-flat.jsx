import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfh940b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wfh940b8u"/>`,
		"fallback": "streamline-sharp-color:user-single-neutral-male-flat",
	});
}

export default Component;
