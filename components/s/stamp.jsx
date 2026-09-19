import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw_58wbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw_58wbpi"/>`,
		"fallback": "boxicons:stamp",
	});
}

export default Component;
