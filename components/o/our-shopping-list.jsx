import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovwofqb5k.css';
import '../../css/q/qjx3e9jap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ovwofqb5k"/><path class="qjx3e9jap"/>`,
		"fallback": "selfhst:our-shopping-list",
	});
}

export default Component;
