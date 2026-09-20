import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r070gx9zv.css';
import '../../css/a/ay5eylboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r070gx9zv"/><path class="ay5eylboh"/></g>`,
		"fallback": "streamline-sharp-color:round-anchor-point-flat",
	});
}

export default Component;
