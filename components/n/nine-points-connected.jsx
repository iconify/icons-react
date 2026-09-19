import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuw8ucyks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuw8ucyks"/>`,
		"fallback": "icon-park-outline:nine-points-connected",
	});
}

export default Component;
