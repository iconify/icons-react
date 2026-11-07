import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl9btdb8y.css';
import '../../css/b/bf_6q8b-r.css';
import '../../css/h/hizge7bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yl9btdb8y"/><path class="bf_6q8b-r"/><path class="hizge7bio"/>`,
		"fallback": "solar:suitcase-lines-bold",
	});
}

export default Component;
