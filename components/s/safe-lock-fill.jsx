import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n98i4bxrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n98i4bxrc"/>`,
		"fallback": "mingcute:safe-lock-fill",
	});
}

export default Component;
