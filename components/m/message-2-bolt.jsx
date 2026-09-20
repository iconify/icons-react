import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe1k7lb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe1k7lb5j"/>`,
		"fallback": "tabler:message-2-bolt",
	});
}

export default Component;
