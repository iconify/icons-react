import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p78v6bc7c.css';
import '../../css/h/hdgfpybio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p78v6bc7c"/><path class="hdgfpybio"/>`,
		"fallback": "icomoon-free:safari",
	});
}

export default Component;
