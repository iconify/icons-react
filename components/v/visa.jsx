import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5be5-ssr.css';
import '../../css/j/jn7q2h3yu.css';
import '../../css/o/o4xfpac0a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5be5-ssr"/><path class="jn7q2h3yu"/><path class="o4xfpac0a"/>`,
		"fallback": "formkit:visa",
	});
}

export default Component;
