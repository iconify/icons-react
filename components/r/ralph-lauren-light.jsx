import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7z15dbcp.css';

const viewBox = {"width":684,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7z15dbcp"/>`,
		"fallback": "thesvg-color:ralph-lauren-light",
	});
}

export default Component;
