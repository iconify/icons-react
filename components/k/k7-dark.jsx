import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqpaqxb6c.css';
import '../../css/u/ud-8v13el.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqpaqxb6c"/><path class="ud-8v13el"/>`,
		"fallback": "selfhst:k7-dark",
	});
}

export default Component;
