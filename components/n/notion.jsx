import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0_wgyb4o.css';
import '../../css/t/tpvreibwc.css';

const viewBox = {"width":256,"height":268};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0_wgyb4o"/><path class="tpvreibwc"/>`,
		"fallback": "thesvg-color:notion",
	});
}

export default Component;
