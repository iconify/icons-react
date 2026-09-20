import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t-cuypbqt.css';
import '../../css/l/lpll3yugd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t-cuypbqt"/><path class="lpll3yugd"/></g>`,
		"fallback": "streamline-sharp-color:reset-clock-flat",
	});
}

export default Component;
