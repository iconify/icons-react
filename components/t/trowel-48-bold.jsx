import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_9sgybsj.css';
import '../../css/s/sd1bnsbfx.css';
import '../../css/t/teddm1b8l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_9sgybsj"/><path class="sd1bnsbfx"/><path class="teddm1b8l"/>`,
		"fallback": "energy-icons:trowel-48-bold",
	});
}

export default Component;
