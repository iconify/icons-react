import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjc_zt5-d.css';
import '../../css/c/cr5oxtb9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjc_zt5-d"/><path class="cr5oxtb9g"/>`,
		"fallback": "selfhst:ups",
	});
}

export default Component;
