import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mab8s_msf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mab8s_msf"/>`,
		"fallback": "streamline-cyber:swimming-pool-2",
	});
}

export default Component;
