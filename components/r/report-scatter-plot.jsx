import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg3dsid_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg3dsid_j"/>`,
		"fallback": "mdi:report-scatter-plot",
	});
}

export default Component;
