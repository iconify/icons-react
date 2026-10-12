import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxzfl5btn.css';
import '../../css/e/ekw862bgh.css';
import '../../css/d/d8p7d1b8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxzfl5btn"/><path class="ekw862bgh"/><path class="d8p7d1b8q"/>`,
		"fallback": "energy-icons:paste-48",
	});
}

export default Component;
