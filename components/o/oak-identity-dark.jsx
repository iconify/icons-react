import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6bi1rard.css';
import '../../css/m/m5qdqtwec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6bi1rard"/><path class="m5qdqtwec"/>`,
		"fallback": "selfhst:oak-identity-dark",
	});
}

export default Component;
