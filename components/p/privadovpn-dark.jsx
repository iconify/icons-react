import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5ucif9jw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5ucif9jw"/>`,
		"fallback": "selfhst:privadovpn-dark",
	});
}

export default Component;
