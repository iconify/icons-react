import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pepniobgb.css';
import '../../css/i/ibtmf_4hy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pepniobgb"/><path class="ibtmf_4hy"/></g>`,
		"fallback": "streamline-color:school-bus-side-flat",
	});
}

export default Component;
