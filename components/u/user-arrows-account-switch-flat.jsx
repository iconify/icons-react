import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y7vsxi54r.css';
import '../../css/m/minytf7za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y7vsxi54r"/><path class="minytf7za"/></g>`,
		"fallback": "streamline-sharp-color:user-arrows-account-switch-flat",
	});
}

export default Component;
