import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plrm2twbs.css';
import '../../css/k/ku0zhsboo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plrm2twbs"/><path class="ku0zhsboo"/>`,
		"fallback": "selfhst:ipvanish",
	});
}

export default Component;
