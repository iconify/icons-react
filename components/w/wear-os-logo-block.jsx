import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9-av8bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9-av8bnb"/>`,
		"fallback": "streamline-logos:wear-os-logo-block",
	});
}

export default Component;
