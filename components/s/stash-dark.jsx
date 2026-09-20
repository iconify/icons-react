import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xopw7kbrp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xopw7kbrp"/>`,
		"fallback": "selfhst:stash-dark",
	});
}

export default Component;
