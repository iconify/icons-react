import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-hle4b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-hle4b6c"/>`,
		"fallback": "simple-icons:sfml",
	});
}

export default Component;
