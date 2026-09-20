import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sidyi6d3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sidyi6d3n"/>`,
		"fallback": "reicon:shield-off-filled",
	});
}

export default Component;
