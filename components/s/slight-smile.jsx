import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmog28b8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmog28b8g"/>`,
		"fallback": "pajamas:slight-smile",
	});
}

export default Component;
