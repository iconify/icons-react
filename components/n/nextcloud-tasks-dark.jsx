import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahxjtbgjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahxjtbgjg"/>`,
		"fallback": "selfhst:nextcloud-tasks-dark",
	});
}

export default Component;
