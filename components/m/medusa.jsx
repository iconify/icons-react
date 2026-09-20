import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okzc-_smy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okzc-_smy"/>`,
		"fallback": "selfhst:medusa",
	});
}

export default Component;
