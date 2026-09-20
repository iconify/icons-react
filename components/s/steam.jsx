import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzly_lbpi.css';
import '../../css/u/uh68dtbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzly_lbpi"/><path class="uh68dtbfd"/>`,
		"fallback": "mage:steam",
	});
}

export default Component;
