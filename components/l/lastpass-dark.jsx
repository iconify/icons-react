import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv9oo8zrp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv9oo8zrp"/>`,
		"fallback": "selfhst:lastpass-dark",
	});
}

export default Component;
