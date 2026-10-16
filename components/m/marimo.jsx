import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if0nh-buo.css';
import '../../css/b/b57rxsbat.css';
import '../../css/i/ivod1rbyr.css';

const viewBox = {"width":139.149,"height":111.25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if0nh-buo"/><path class="b57rxsbat"/><path class="ivod1rbyr"/>`,
		"fallback": "thesvg-color:marimo",
	});
}

export default Component;
