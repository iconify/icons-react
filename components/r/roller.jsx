import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu_yqmbgp.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu_yqmbgp"/>`,
		"fallback": "zmdi:roller",
	});
}

export default Component;
