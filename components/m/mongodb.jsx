import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-08wh0_j.css';
import '../../css/v/vnuucwq6l.css';
import '../../css/s/s7cf2jbnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-08wh0_j"/><path class="vnuucwq6l"/><path class="s7cf2jbnd"/>`,
		"fallback": "selfhst:mongodb",
	});
}

export default Component;
