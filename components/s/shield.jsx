import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxuy57k1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxuy57k1e"/>`,
		"fallback": "icon-park:shield",
	});
}

export default Component;
