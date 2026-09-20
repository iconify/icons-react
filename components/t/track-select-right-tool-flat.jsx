import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pqc2lsb4s.css';
import '../../css/r/rc6ec279a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pqc2lsb4s"/><path class="rc6ec279a"/></g>`,
		"fallback": "streamline-flex-color:track-select-right-tool-flat",
	});
}

export default Component;
