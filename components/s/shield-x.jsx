import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu4ghgmcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu4ghgmcw"/>`,
		"fallback": "keyline-icons:shield-x",
	});
}

export default Component;
