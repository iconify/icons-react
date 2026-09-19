import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj0zef79h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj0zef79h"/>`,
		"fallback": "at-icons:rewind",
	});
}

export default Component;
