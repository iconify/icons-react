import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_0fjlbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_0fjlbsp"/>`,
		"fallback": "streamline-plump:map-fold",
	});
}

export default Component;
