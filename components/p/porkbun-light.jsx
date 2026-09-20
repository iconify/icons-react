import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqk4wvbkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqk4wvbkv"/>`,
		"fallback": "selfhst:porkbun-light",
	});
}

export default Component;
