import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksny98b8v.css';
import '../../css/a/ay56a163g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksny98b8v"/><path class="ay56a163g"/>`,
		"fallback": "ooui:new-window-rtl",
	});
}

export default Component;
