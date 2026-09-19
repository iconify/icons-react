import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu3perb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu3perb1d"/>`,
		"fallback": "basil:menu-outline",
	});
}

export default Component;
