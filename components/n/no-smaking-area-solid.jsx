import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-qyrzbdi.css';
import '../../css/h/h6wxg2fcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-qyrzbdi"/><path class="h6wxg2fcl"/>`,
		"fallback": "streamline-plump:no-smaking-area-solid",
	});
}

export default Component;
