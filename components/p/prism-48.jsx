import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lymkpobns.css';
import '../../css/x/xfeis42ke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lymkpobns"/><path class="xfeis42ke"/>`,
		"fallback": "energy-icons:prism-48",
	});
}

export default Component;
