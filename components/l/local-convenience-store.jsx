import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcsm9xb_x.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcsm9xb_x"/>`,
		"fallback": "zmdi:local-convenience-store",
	});
}

export default Component;
