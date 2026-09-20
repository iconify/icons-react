import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbqk0lyvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbqk0lyvt"/>`,
		"fallback": "reicon:map-alt",
	});
}

export default Component;
