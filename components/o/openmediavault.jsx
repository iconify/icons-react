import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrvfbr9fo.css';
import '../../css/r/r-62_47-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrvfbr9fo"/><path class="r-62_47-w"/>`,
		"fallback": "selfhst:openmediavault",
	});
}

export default Component;
