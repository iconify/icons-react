import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d59vkeb0u.css';

const viewBox = {"width":1001,"height":667};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d59vkeb0u"/>`,
		"fallback": "thesvg-color:tidal-light",
	});
}

export default Component;
