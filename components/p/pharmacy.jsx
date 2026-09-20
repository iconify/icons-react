import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0g4jgwls.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0g4jgwls"/>`,
		"fallback": "map:pharmacy",
	});
}

export default Component;
