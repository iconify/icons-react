import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xx39db59y.css';
import '../../css/x/x9pcdnd4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xx39db59y"/><path class="x9pcdnd4t"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-otp-message-1",
	});
}

export default Component;
