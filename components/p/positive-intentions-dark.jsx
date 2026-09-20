import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyd79ccra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyd79ccra"/>`,
		"fallback": "selfhst:positive-intentions-dark",
	});
}

export default Component;
