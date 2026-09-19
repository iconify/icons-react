import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldqp1sbfn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldqp1sbfn"/>`,
		"fallback": "fa6-solid:person-drowning",
	});
}

export default Component;
