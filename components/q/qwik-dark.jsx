import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c60-6kb4c.css';
import '../../css/k/kqgg57b8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c60-6kb4c"/><path class="kqgg57b8n"/>`,
		"fallback": "selfhst:qwik-dark",
	});
}

export default Component;
