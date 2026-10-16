import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zryaw4dka.css';
import '../../css/m/mxfeqjd4c.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zryaw4dka"/><path class="mxfeqjd4c"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:invoice-paid-48-bold",
	});
}

export default Component;
