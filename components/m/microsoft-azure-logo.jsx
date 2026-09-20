import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejd2b6b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejd2b6b5p"/>`,
		"fallback": "streamline-logos:microsoft-azure-logo",
	});
}

export default Component;
