import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmsdvdbdw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmsdvdbdw"/>`,
		"fallback": "system-uicons:signal-none",
	});
}

export default Component;
