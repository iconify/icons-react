import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dd6gkfwme.css';
import '../../css/z/zi7qyobeq.css';
import '../../css/h/hjezvpw5i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dd6gkfwme"/><path class="zi7qyobeq"/><path class="hjezvpw5i"/></g>`,
		"fallback": "streamline-flex-color:toaster-flat",
	});
}

export default Component;
