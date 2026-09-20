import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgmydkb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgmydkb_a"/>`,
		"fallback": "selfhst:owntone-light",
	});
}

export default Component;
