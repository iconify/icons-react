import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/e/e16bk6emp.css';
import '../../css/p/p62-edcjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="e16bk6emp"/><path class="p62-edcjl"/></g>`,
		"fallback": "streamline-sharp-color:rotate-right",
	});
}

export default Component;
