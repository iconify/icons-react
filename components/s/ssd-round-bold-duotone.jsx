import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6h73cb-x.css';
import '../../css/v/vpz4phbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6h73cb-x"/><path clip-rule="evenodd" class="vpz4phbzh"/>`,
		"fallback": "solar:ssd-round-bold-duotone",
	});
}

export default Component;
