import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzp_ikb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzp_ikb9d"/>`,
		"fallback": "streamline-sharp:milk",
	});
}

export default Component;
