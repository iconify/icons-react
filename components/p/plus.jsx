import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm7pf2ban.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm7pf2ban"/>`,
		"fallback": "glyphs:plus",
	});
}

export default Component;
