import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id6zxua6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id6zxua6a"/>`,
		"fallback": "thesvg-color:nushell",
	});
}

export default Component;
