import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kemebac4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kemebac4a"/>`,
		"fallback": "streamline-logos:thread-block-logo-block",
	});
}

export default Component;
