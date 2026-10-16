import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx_rtncis.css';
import '../../css/e/e0nmxkmog.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx_rtncis"/><path class="e0nmxkmog"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:server-check-48-bold",
	});
}

export default Component;
