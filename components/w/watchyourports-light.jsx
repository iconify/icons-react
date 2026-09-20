import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhdoorb_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhdoorb_b"/>`,
		"fallback": "selfhst:watchyourports-light",
	});
}

export default Component;
