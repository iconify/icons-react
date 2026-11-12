import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfa4qjb2q.css';
import '../../css/p/psr8s7bwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kfa4qjb2q"/><path class="psr8s7bwr"/>`,
		"fallback": "selfhst:super-productivity",
	});
}

export default Component;
