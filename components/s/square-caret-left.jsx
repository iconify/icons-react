import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvr_rccxi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvr_rccxi"/>`,
		"fallback": "fa7-regular:square-caret-left",
	});
}

export default Component;
