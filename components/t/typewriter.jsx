import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdcc0qd_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdcc0qd_x"/>`,
		"fallback": "streamline-sharp:typewriter",
	});
}

export default Component;
