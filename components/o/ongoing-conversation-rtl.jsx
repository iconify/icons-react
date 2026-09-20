import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbe0iemxf.css';
import '../../css/t/tiglpdb9c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbe0iemxf"/><path class="tiglpdb9c"/>`,
		"fallback": "ooui:ongoing-conversation-rtl",
	});
}

export default Component;
