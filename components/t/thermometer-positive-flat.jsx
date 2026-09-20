import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bs1hdobxx.css';
import '../../css/s/szxt_99bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bs1hdobxx"/><path class="szxt_99bp"/></g>`,
		"fallback": "streamline-sharp-color:thermometer-positive-flat",
	});
}

export default Component;
