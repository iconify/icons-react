import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw0zmzb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw0zmzb3c"/>`,
		"fallback": "solar:undo-left-round-broken",
	});
}

export default Component;
