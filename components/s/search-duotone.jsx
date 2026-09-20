import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw0v5yb-n.css';
import '../../css/f/f9b-7_qnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw0v5yb-n"/><path class="f9b-7_qnh"/>`,
		"fallback": "stash:search-duotone",
	});
}

export default Component;
