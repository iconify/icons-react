import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-keo3gqf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-keo3gqf"/>`,
		"fallback": "gis:proj-geo",
	});
}

export default Component;
