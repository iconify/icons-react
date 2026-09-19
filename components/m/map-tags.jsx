import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7f1umbwh.css';
import '../../css/e/e1yonmpfk.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7f1umbwh"/><path class="e1yonmpfk"/>`,
		"fallback": "gis:map-tags",
	});
}

export default Component;
