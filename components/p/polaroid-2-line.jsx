import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgp-hdafg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgp-hdafg"/>`,
		"fallback": "ri:polaroid-2-line",
	});
}

export default Component;
