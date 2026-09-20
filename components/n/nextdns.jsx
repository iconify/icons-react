import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg5l84btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg5l84btc"/>`,
		"fallback": "thesvg-color:nextdns",
	});
}

export default Component;
