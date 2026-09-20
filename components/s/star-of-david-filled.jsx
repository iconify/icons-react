import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf6tcylxd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf6tcylxd"/>`,
		"fallback": "pinhead:star-of-david-filled",
	});
}

export default Component;
