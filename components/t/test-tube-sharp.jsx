import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxcqmib8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxcqmib8r"/>`,
		"fallback": "keyline-icons:test-tube-sharp",
	});
}

export default Component;
