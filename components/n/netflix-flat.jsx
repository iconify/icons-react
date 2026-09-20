import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r2s6lobvc.css';
import '../../css/b/byb1ksxzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r2s6lobvc"/><path class="byb1ksxzu"/></g>`,
		"fallback": "streamline-color:netflix-flat",
	});
}

export default Component;
