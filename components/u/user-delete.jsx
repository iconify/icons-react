import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhjpylb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhjpylb2s"/>`,
		"fallback": "typcn:user-delete",
	});
}

export default Component;
