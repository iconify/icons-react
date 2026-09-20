import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpcii4vhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpcii4vhw"/>`,
		"fallback": "tabler:message-2-filled",
	});
}

export default Component;
