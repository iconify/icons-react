import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqzfx8bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqzfx8bjk"/>`,
		"fallback": "thesvg-color:trade-republic",
	});
}

export default Component;
