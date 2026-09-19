import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu89-tlog.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu89-tlog"/>`,
		"fallback": "gis:proj-square",
	});
}

export default Component;
