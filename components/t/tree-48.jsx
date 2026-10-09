import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3_p_x84g.css';
import '../../css/v/ve426zb6c.css';
import '../../css/l/lx7eh7b9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3_p_x84g"/><path class="ve426zb6c"/><path class="lx7eh7b9b"/>`,
		"fallback": "energy-icons:tree-48",
	});
}

export default Component;
