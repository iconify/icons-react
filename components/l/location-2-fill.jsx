import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly9sq0blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly9sq0blk"/>`,
		"fallback": "mingcute:location-2-fill",
	});
}

export default Component;
