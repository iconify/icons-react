import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adb_bacik.css';

const viewBox = {"width":1792,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adb_bacik"/>`,
		"fallback": "vs:sunrise",
	});
}

export default Component;
