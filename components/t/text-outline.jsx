import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erw8smbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erw8smbcx"/>`,
		"fallback": "tabler:text-outline",
	});
}

export default Component;
