import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3cgxdb0q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3cgxdb0q"/>`,
		"fallback": "fa7-regular:registered",
	});
}

export default Component;
