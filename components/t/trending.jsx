import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkun__b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkun__b-c"/>`,
		"fallback": "pixel:trending",
	});
}

export default Component;
