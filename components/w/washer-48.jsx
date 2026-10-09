import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz2ueib5k.css';
import '../../css/o/o0dsv_yqv.css';
import '../../css/a/anr76sdxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz2ueib5k"/><path class="o0dsv_yqv"/><path class="anr76sdxi"/>`,
		"fallback": "energy-icons:washer-48",
	});
}

export default Component;
