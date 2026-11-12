import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejfssjyjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejfssjyjp"/>`,
		"fallback": "selfhst:pgadmin-dark",
	});
}

export default Component;
