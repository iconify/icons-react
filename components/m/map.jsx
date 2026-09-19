import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1pk1--fd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1pk1--fd"/>`,
		"fallback": "gis:map",
	});
}

export default Component;
