import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfrd7146j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfrd7146j"/>`,
		"fallback": "cbi:jiocinema",
	});
}

export default Component;
