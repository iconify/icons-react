import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_kst0bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b u_kst0bgv"/>`,
		"fallback": "boxicons:steering-wheel",
	});
}

export default Component;
