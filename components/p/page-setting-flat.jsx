import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vtese4bvs.css';
import '../../css/x/xwtem8xnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vtese4bvs"/><path class="xwtem8xnt"/></g>`,
		"fallback": "streamline-sharp-color:page-setting-flat",
	});
}

export default Component;
