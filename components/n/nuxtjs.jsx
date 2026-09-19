import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uydf_d1if.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uydf_d1if"/>`,
		"fallback": "devicon-plain:nuxtjs",
	});
}

export default Component;
