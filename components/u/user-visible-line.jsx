import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhyvuvlly.css';
import '../../css/d/ddlx9mbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhyvuvlly"/><path class="ddlx9mbvt"/>`,
		"fallback": "mingcute:user-visible-line",
	});
}

export default Component;
