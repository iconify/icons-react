import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/o/oscabebss.css';
import '../../css/i/ijtuyxbwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o58hkebvg"><path class="oscabebss"/><path class="ijtuyxbwx"/></g>`,
		"fallback": "catppuccin:latte",
	});
}

export default Component;
