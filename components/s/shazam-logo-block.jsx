import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q06-nox-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q06-nox-t"/>`,
		"fallback": "streamline-logos:shazam-logo-block",
	});
}

export default Component;
