import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0xk9jbod.css';
import '../../css/a/a-sqa4bwz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0xk9jbod"/><path class="a-sqa4bwz"/>`,
		"fallback": "gis:topojson-file",
	});
}

export default Component;
