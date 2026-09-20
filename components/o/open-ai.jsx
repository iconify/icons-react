import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm_om44gp.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm_om44gp"/>`,
		"fallback": "lineicons:open-ai",
	});
}

export default Component;
