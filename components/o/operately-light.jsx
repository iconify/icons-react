import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k82zlrxzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k82zlrxzg"/>`,
		"fallback": "selfhst:operately-light",
	});
}

export default Component;
