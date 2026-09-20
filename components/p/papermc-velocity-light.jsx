import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o44tc3byv.css';
import '../../css/e/eplvi-bwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o44tc3byv"/><path class="eplvi-bwj"/>`,
		"fallback": "selfhst:papermc-velocity-light",
	});
}

export default Component;
