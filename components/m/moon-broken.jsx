import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyk1n58rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyk1n58rw"/>`,
		"fallback": "solar:moon-broken",
	});
}

export default Component;
