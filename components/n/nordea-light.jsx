import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o--qnccve.css';

const viewBox = {"width":1515,"height":1477};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o--qnccve"/>`,
		"fallback": "thesvg-color:nordea-light",
	});
}

export default Component;
