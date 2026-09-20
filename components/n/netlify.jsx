import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewk5jvbls.css';
import '../../css/h/hok5llblz.css';
import '../../css/d/d3a09urjs.css';

const viewBox = {"width":256,"height":226};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewk5jvbls"/><path class="hok5llblz"/><path class="d3a09urjs"/>`,
		"fallback": "thesvg-color:netlify",
	});
}

export default Component;
