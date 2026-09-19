import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mel2d5bql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mel2d5bql"/>`,
		"fallback": "file-icons:self",
	});
}

export default Component;
