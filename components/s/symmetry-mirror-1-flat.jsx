import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uflx-7chj.css';
import '../../css/o/o-g90wosu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uflx-7chj"/><path class="o-g90wosu"/></g>`,
		"fallback": "streamline-sharp-color:symmetry-mirror-1-flat",
	});
}

export default Component;
