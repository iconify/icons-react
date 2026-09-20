import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew05xgb0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew05xgb0r"/>`,
		"fallback": "selfhst:proxmenux-dark",
	});
}

export default Component;
