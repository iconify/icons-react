import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg3u83fnv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg3u83fnv"/>`,
		"fallback": "whh:splitthree",
	});
}

export default Component;
