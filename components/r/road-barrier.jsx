import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccz98ti9a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccz98ti9a"/>`,
		"fallback": "fa6-solid:road-barrier",
	});
}

export default Component;
