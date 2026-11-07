import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nayqy1c_r.css';
import '../../css/n/nrrsncbey.css';
import '../../css/n/nh6q7vamn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nayqy1c_r"/><path class="nrrsncbey"/><path class="nh6q7vamn"/>`,
		"fallback": "solar:table-cells-merge-bold-duotone",
	});
}

export default Component;
