import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/affh-gusn.css';
import '../../css/y/ytt1hgb5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="affh-gusn"/><path class="ytt1hgb5v"/></g>`,
		"fallback": "streamline-color:smiley-surprised-flat",
	});
}

export default Component;
