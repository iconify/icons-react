import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmii52b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmii52b6o"/>`,
		"fallback": "noviair:user-circle-lock",
	});
}

export default Component;
