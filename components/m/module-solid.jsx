import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stn_egbaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stn_egbaw"/>`,
		"fallback": "streamline-plump:module-solid",
	});
}

export default Component;
