import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq2wkoc3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq2wkoc3r"/>`,
		"fallback": "simple-icons:openstreetmap",
	});
}

export default Component;
