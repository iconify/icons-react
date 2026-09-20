import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h-bavgosi.css';
import '../../css/z/zvl6_pkqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h-bavgosi"/><path class="zvl6_pkqn"/></g>`,
		"fallback": "streamline-sharp-color:nose-smell-flat",
	});
}

export default Component;
