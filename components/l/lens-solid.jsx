import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmi-y2bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmi-y2bsm"/>`,
		"fallback": "streamline-sharp:lens-solid",
	});
}

export default Component;
