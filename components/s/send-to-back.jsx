import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym5ag0pcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym5ag0pcx"/>`,
		"fallback": "ri:send-to-back",
	});
}

export default Component;
