import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixky28b1f.css';
import '../../css/y/ye90rbccq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixky28b1f"/><path class="ye90rbccq"/>`,
		"fallback": "solar:pip-2-bold-duotone",
	});
}

export default Component;
