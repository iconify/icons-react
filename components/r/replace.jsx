import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg74q_5-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg74q_5-f"/>`,
		"fallback": "codex:replace",
	});
}

export default Component;
