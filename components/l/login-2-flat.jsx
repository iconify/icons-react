import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bki9hd1kt.css';
import '../../css/s/slqdohzjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bki9hd1kt"/><path class="slqdohzjs"/></g>`,
		"fallback": "streamline-sharp-color:login-2-flat",
	});
}

export default Component;
