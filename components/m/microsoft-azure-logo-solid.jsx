import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt5mmebdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lt5mmebdt"/>`,
		"fallback": "streamline-logos:microsoft-azure-logo-solid",
	});
}

export default Component;
