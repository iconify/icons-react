import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjois9l_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rjois9l_j"/>`,
		"fallback": "streamline-logos:microsoft-sharepoint-logo-solid",
	});
}

export default Component;
