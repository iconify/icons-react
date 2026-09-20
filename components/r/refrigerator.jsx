import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la6dvw7cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la6dvw7cw"/>`,
		"fallback": "streamline-sharp:refrigerator",
	});
}

export default Component;
