import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1faat60f.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1faat60f"/>`,
		"fallback": "whh:recycle",
	});
}

export default Component;
