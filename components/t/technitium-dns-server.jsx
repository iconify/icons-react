import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx_xolb0l.css';
import '../../css/n/nfhumnbud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx_xolb0l"/><path class="nfhumnbud"/>`,
		"fallback": "thesvg-color:technitium-dns-server",
	});
}

export default Component;
