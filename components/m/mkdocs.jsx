import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej8rvisjq.css';
import '../../css/n/np34t097q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej8rvisjq"/><path class="np34t097q"/>`,
		"fallback": "selfhst:mkdocs",
	});
}

export default Component;
