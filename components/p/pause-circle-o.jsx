import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd8eg6pwc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd8eg6pwc"/>`,
		"fallback": "uiw:pause-circle-o",
	});
}

export default Component;
