import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2je0ebuv.css';
import '../../css/f/f0_0fq_hk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2je0ebuv"/><path class="f0_0fq_hk"/>`,
		"fallback": "energy-icons:mail-open-48-bold",
	});
}

export default Component;
