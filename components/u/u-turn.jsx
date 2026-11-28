import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwfee47_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwfee47_r"/>`,
		"fallback": "noviair:u-turn",
	});
}

export default Component;
