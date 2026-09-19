import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opee3bbzg.css';
import '../../css/k/ko-zgkb5p.css';
import '../../css/q/q044p6bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opee3bbzg"/><rect class="ko-zgkb5p"/><rect class="q044p6bsk"/>`,
		"fallback": "eva:menu-arrow-fill",
	});
}

export default Component;
