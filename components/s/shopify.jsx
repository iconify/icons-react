import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwx7xzbau.css';
import '../../css/p/pjoaw5biz.css';
import '../../css/x/xtnbm313d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwx7xzbau"/><path class="pjoaw5biz"/><path class="xtnbm313d"/>`,
		"fallback": "selfhst:shopify",
	});
}

export default Component;
