import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ii93jxbjy.css';
import '../../css/l/l5hnwnbrd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ii93jxbjy"/><path class="l5hnwnbrd"/></g>`,
		"fallback": "streamline-color:tea-cup-flat",
	});
}

export default Component;
