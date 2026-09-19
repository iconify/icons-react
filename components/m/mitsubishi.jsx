import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebmm8_bcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebmm8_bcf"/>`,
		"fallback": "icon-park-solid:mitsubishi",
	});
}

export default Component;
