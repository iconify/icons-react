import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzzpiv8ck.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzzpiv8ck"/>`,
		"fallback": "dinkie-icons:triangular-ruler",
	});
}

export default Component;
