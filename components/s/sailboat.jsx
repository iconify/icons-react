import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh-qmcohf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh-qmcohf"/>`,
		"fallback": "temaki:sailboat",
	});
}

export default Component;
