import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-k1b_1rw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-k1b_1rw"/>`,
		"fallback": "fa-solid:taxi",
	});
}

export default Component;
