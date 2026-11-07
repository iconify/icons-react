import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9asq1fvt.css';
import '../../css/l/l4t7dwu3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9asq1fvt"/><path class="l4t7dwu3c"/>`,
		"fallback": "solar:panel-bottom-bold-duotone",
	});
}

export default Component;
