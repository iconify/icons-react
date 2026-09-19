import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvcq89ble.css';
import '../../css/s/ss60qzbvo.css';
import '../../css/z/zlms2bb-e.css';
import '../../css/j/j_hdszcam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvcq89ble"><path class="ss60qzbvo"/><path class="zlms2bb-e"/><path class="j_hdszcam"/></g>`,
		"fallback": "catppuccin:stylelint-ignore",
	});
}

export default Component;
