import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3qtumeeg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3qtumeeg"/>`,
		"fallback": "glyphs:sleetlet",
	});
}

export default Component;
