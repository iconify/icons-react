import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy8db6b8d.css';
import '../../css/k/kch4ro44n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy8db6b8d"/><path class="kch4ro44n"/>`,
		"fallback": "selfhst:proton-wallet-dark",
	});
}

export default Component;
