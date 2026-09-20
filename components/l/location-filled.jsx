import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4s149y6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4s149y6t"/>`,
		"fallback": "lsicon:location-filled",
	});
}

export default Component;
