import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8smc1yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8smc1yu"/>`,
		"fallback": "tabler:octagon-filled",
	});
}

export default Component;
