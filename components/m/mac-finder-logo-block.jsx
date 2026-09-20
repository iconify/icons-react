import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi5uwfb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mi5uwfb3p"/>`,
		"fallback": "streamline-logos:mac-finder-logo-block",
	});
}

export default Component;
