import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azscm5t4y.css';
import '../../css/q/qqfentbum.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azscm5t4y"/><path class="qqfentbum"/>`,
		"fallback": "flat-color-icons:right-down2",
	});
}

export default Component;
