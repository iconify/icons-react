import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/w/wxzk5db5t.css';
import '../../css/a/arm5m9b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><circle class="tcwe4ewrv"/><path class="wxzk5db5t"/><path class="arm5m9b8b"/></g>`,
		"fallback": "hugeicons:user-warning-02",
	});
}

export default Component;
