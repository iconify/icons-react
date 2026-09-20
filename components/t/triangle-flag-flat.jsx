import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t-fdagdta.css';
import '../../css/b/b38-u9b4r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t-fdagdta"/><path class="b38-u9b4r"/></g>`,
		"fallback": "streamline-color:triangle-flag-flat",
	});
}

export default Component;
