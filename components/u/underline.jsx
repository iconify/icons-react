import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phs4js9lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phs4js9lq"/>`,
		"fallback": "streamline-cyber:underline",
	});
}

export default Component;
