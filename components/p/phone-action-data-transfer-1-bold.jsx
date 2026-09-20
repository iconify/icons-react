import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m51kbubxl.css';
import '../../css/e/ejnjdobnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m51kbubxl"/><path class="ejnjdobnn"/>`,
		"fallback": "streamline-ultimate:phone-action-data-transfer-1-bold",
	});
}

export default Component;
