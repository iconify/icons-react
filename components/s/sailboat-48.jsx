import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj37yftef.css';
import '../../css/i/i13uryznj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj37yftef"/><path class="i13uryznj"/>`,
		"fallback": "energy-icons:sailboat-48",
	});
}

export default Component;
