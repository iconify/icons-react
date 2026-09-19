import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5hzx-o4f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5hzx-o4f"/>`,
		"fallback": "gis:time-map",
	});
}

export default Component;
