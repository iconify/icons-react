import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suaf7nfwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="suaf7nfwt"/>`,
		"fallback": "solar:round-transfer-vertical-bold",
	});
}

export default Component;
