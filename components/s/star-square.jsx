import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-wgyugil.css';
import '../../css/q/qlgozrxrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-wgyugil"/><path class="qlgozrxrt"/>`,
		"fallback": "boxicons:star-square",
	});
}

export default Component;
