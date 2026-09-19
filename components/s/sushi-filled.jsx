import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unkwe7bpp.css';
import '../../css/u/uqzyn-kgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unkwe7bpp"/><path class="uqzyn-kgu"/>`,
		"fallback": "boxicons:sushi-filled",
	});
}

export default Component;
