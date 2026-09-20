import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tss2zerei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tss2zerei"/>`,
		"fallback": "streamline-logos:loom-logo-solid",
	});
}

export default Component;
