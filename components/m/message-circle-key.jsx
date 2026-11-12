import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq-l9svud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq-l9svud"/>`,
		"fallback": "tabler:message-circle-key",
	});
}

export default Component;
