import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b67w6_c5v.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b67w6_c5v"/>`,
		"fallback": "gis:snap",
	});
}

export default Component;
