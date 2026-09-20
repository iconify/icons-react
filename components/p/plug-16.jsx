import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcu97ozgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcu97ozgb"/>`,
		"fallback": "octicon:plug-16",
	});
}

export default Component;
