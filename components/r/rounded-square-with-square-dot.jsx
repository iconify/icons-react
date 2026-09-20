import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxhg82bqa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxhg82bqa"/>`,
		"fallback": "pinhead:rounded-square-with-square-dot",
	});
}

export default Component;
