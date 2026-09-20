import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh3143b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh3143b3n"/>`,
		"fallback": "keyline-icons:scan-text-sharp-fill",
	});
}

export default Component;
