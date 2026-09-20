import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrp0pi-hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lrp0pi-hl"/>`,
		"fallback": "reicon:list-arrow-up2",
	});
}

export default Component;
