import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w68k6c7er.css';
import '../../css/p/pj0sc-jqd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w68k6c7er"/><path class="pj0sc-jqd"/></g>`,
		"fallback": "streamline-color:page-setting-flat",
	});
}

export default Component;
