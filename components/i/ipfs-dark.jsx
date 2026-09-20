import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tunlaubxi.css';
import '../../css/d/da5se5sef.css';
import '../../css/h/h01ydvy9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tunlaubxi"/><path class="da5se5sef"/><path class="h01ydvy9z"/>`,
		"fallback": "selfhst:ipfs-dark",
	});
}

export default Component;
