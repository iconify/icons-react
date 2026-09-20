import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxc0_pbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxc0_pbka"/>`,
		"fallback": "thesvg-color:nbc",
	});
}

export default Component;
