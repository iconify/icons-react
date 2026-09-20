import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka3xe-i4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka3xe-i4h"/>`,
		"fallback": "tdesign:more",
	});
}

export default Component;
