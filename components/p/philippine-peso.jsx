import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz11kf90n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz11kf90n"/>`,
		"fallback": "hugeicons:philippine-peso",
	});
}

export default Component;
