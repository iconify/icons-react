import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbvhxf02i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbvhxf02i"/>`,
		"fallback": "tabler:scan-position",
	});
}

export default Component;
