import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob246sz2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob246sz2s"/>`,
		"fallback": "mdi:robber-mask",
	});
}

export default Component;
