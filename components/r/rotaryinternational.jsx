import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgfgw121s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgfgw121s"/>`,
		"fallback": "simple-icons:rotaryinternational",
	});
}

export default Component;
