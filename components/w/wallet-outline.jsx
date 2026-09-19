import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g95e799uz.css';
import '../../css/v/vpo1j0hds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g95e799uz"/><path clip-rule="evenodd" class="vpo1j0hds"/>`,
		"fallback": "basil:wallet-outline",
	});
}

export default Component;
