import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjccsx91c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjccsx91c"/>`,
		"fallback": "boxicons:wallet-note",
	});
}

export default Component;
