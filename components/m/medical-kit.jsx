import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox5bagm_m.css';
import '../../css/a/a-uqmqb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox5bagm_m"/><path class="a-uqmqb2g"/>`,
		"fallback": "boxicons:medical-kit",
	});
}

export default Component;
