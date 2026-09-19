import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkmcq7bwg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkmcq7bwg"/>`,
		"fallback": "fa7-brands:periscope",
	});
}

export default Component;
