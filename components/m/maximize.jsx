import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfuiahb8m.css';
import '../../css/d/dnd7e2h4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfuiahb8m"/><path class="dnd7e2h4b"/>`,
		"fallback": "fxemoji:maximize",
	});
}

export default Component;
