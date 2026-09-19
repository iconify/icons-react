import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr0e94jng.css';
import '../../css/u/uixwhfcch.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr0e94jng"/><path class="uixwhfcch"/>`,
		"fallback": "foundation:mobile-signal",
	});
}

export default Component;
