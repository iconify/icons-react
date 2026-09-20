import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d6t-9rb5p.css';
import '../../css/g/g35coj2xn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d6t-9rb5p"/><path class="g35coj2xn"/></g>`,
		"fallback": "streamline-color:voice-scan-2-flat",
	});
}

export default Component;
