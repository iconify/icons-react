import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b13d50bqc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b13d50bqc"/>`,
		"fallback": "octicon:screen-full-16",
	});
}

export default Component;
