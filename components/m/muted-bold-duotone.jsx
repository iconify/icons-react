import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nszf3hbuo.css';
import '../../css/m/m_773h0_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nszf3hbuo"/><path class="m_773h0_l"/>`,
		"fallback": "solar:muted-bold-duotone",
	});
}

export default Component;
