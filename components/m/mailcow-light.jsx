import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwh7xgb3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwh7xgb3o"/>`,
		"fallback": "selfhst:mailcow-light",
	});
}

export default Component;
