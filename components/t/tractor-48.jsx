import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3k9_ypge.css';
import '../../css/q/q_ao3jb5h.css';
import '../../css/q/qjx-16ssr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3k9_ypge"/><path class="q_ao3jb5h"/><path class="qjx-16ssr"/>`,
		"fallback": "energy-icons:tractor-48",
	});
}

export default Component;
