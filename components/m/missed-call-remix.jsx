import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqfbs9a5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uqfbs9a5d"/>`,
		"fallback": "streamline-sharp:missed-call-remix",
	});
}

export default Component;
