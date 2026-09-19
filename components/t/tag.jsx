import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-7g6-bii.css';
import '../../css/a/a7xkecbkr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-7g6-bii"/><path class="a7xkecbkr"/>`,
		"fallback": "gis:tag",
	});
}

export default Component;
