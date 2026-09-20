import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp5g3kjqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp5g3kjqg"/>`,
		"fallback": "mdi:text-box-outline",
	});
}

export default Component;
