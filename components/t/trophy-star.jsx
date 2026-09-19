import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfu-amb1j.css';
import '../../css/l/lrbukw_4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfu-amb1j"/><path class="lrbukw_4s"/>`,
		"fallback": "boxicons:trophy-star",
	});
}

export default Component;
