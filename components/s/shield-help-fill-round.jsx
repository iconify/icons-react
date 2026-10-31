import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw4a2-bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw4a2-bbx"/>`,
		"fallback": "coolicons:shield-help-fill-round",
	});
}

export default Component;
