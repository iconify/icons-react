import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3-7u3bsk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3-7u3bsk"/>`,
		"fallback": "selfhst:step-ca-dark",
	});
}

export default Component;
