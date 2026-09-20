import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx9-6wbbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx9-6wbbo"/>`,
		"fallback": "selfhst:rancher-k3os-dark",
	});
}

export default Component;
