import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl5jfab4x.css';
import '../../css/a/a6b9_ibtc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl5jfab4x"/><path class="a6b9_ibtc"/>`,
		"fallback": "temaki:power-manhole",
	});
}

export default Component;
