import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oximatbor.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oximatbor"/>`,
		"fallback": "fa6-regular:star-half-stroke",
	});
}

export default Component;
