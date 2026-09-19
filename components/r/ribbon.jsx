import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exguqts2u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exguqts2u"/>`,
		"fallback": "fa-solid:ribbon",
	});
}

export default Component;
