import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lk-0jbc2x.css';
import '../../css/n/nsb12sb4m.css';
import '../../css/y/y8b9a08tb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lk-0jbc2x"/><path class="nsb12sb4m"/><path class="y8b9a08tb"/></g>`,
		"fallback": "streamline-color:politics-speech-flat",
	});
}

export default Component;
