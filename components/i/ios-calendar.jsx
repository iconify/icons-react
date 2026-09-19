import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reyg2abim.css';
import '../../css/j/jsk_qbbtn.css';
import '../../css/k/k6i8m5bia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reyg2abim"/><path class="jsk_qbbtn"/><path class="k6i8m5bia"/>`,
		"fallback": "ion:ios-calendar",
	});
}

export default Component;
