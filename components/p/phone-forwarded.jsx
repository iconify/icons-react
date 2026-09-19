import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftw-gh2gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftw-gh2gl"/>`,
		"fallback": "feather:phone-forwarded",
	});
}

export default Component;
