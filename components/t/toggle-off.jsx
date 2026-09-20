import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohaewfbtd.css';
import '../../css/v/vx04_ybbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohaewfbtd"/><circle class="vx04_ybbn"/>`,
		"fallback": "uim:toggle-off",
	});
}

export default Component;
