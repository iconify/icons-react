import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gr3pswbay.css';
import '../../css/l/laadmobbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gr3pswbay"/><path class="laadmobbd"/></g>`,
		"fallback": "streamline-freehand-color:tag-new-circle",
	});
}

export default Component;
