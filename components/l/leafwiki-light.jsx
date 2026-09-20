import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umcwb9b6g.css';
import '../../css/q/qxpwau_nq.css';
import '../../css/e/e6t39e56c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umcwb9b6g"/><path class="qxpwau_nq"/><path class="e6t39e56c"/>`,
		"fallback": "selfhst:leafwiki-light",
	});
}

export default Component;
