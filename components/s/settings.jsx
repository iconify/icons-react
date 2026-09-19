import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okput2b5x.css';
import '../../css/n/n4gtcv7gc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okput2b5x"/><path class="n4gtcv7gc"/>`,
		"fallback": "flat-color-icons:settings",
	});
}

export default Component;
