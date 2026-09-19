import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugrnpeb_o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugrnpeb_o"/>`,
		"fallback": "fa7-brands:square-web-awesome-stroke",
	});
}

export default Component;
