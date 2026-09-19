import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma_0tgban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma_0tgban"/>`,
		"fallback": "boxicons:sine-wave-filled",
	});
}

export default Component;
