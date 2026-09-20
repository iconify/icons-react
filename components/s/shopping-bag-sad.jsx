import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tdzzo8b5j.css';
import '../../css/z/zyvddlb3n.css';
import '../../css/r/rum9obbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tdzzo8b5j"/><path class="zyvddlb3n"/><path class="rum9obbsm"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-sad",
	});
}

export default Component;
