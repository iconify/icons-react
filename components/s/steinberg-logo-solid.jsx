import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_37uldgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_37uldgq"/>`,
		"fallback": "streamline-logos:steinberg-logo-solid",
	});
}

export default Component;
