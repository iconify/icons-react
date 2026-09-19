import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozoj0vbaf.css';
import '../../css/k/khkqlacip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozoj0vbaf"/><path class="khkqlacip"/>`,
		"fallback": "boxicons:swimming",
	});
}

export default Component;
