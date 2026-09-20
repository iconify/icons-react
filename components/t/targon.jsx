import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuqu2b3jw.css';
import '../../css/u/uxzknvoyc.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuqu2b3jw"/><path clip-rule="evenodd" class="uxzknvoyc"/>`,
		"fallback": "thesvg-color:targon",
	});
}

export default Component;
