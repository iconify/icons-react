import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgbqb_cnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgbqb_cnu"/>`,
		"fallback": "selfhst:watchyourports-dark",
	});
}

export default Component;
