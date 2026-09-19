import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lueg72bmy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lueg72bmy"/>`,
		"fallback": "fa7-solid:satellite-dish",
	});
}

export default Component;
