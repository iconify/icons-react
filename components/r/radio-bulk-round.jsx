import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df4em2bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df4em2bwd"/>`,
		"fallback": "coolicons:radio-bulk-round",
	});
}

export default Component;
