import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw0t9gb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw0t9gb2o"/>`,
		"fallback": "tabler:logic-and",
	});
}

export default Component;
