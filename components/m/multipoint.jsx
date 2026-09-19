import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq9w7bkbd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq9w7bkbd"/>`,
		"fallback": "gis:multipoint",
	});
}

export default Component;
