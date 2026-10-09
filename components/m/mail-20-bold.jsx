import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn86m-bcf.css';
import '../../css/v/vvf4d-dpu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn86m-bcf"/><path class="vvf4d-dpu"/>`,
		"fallback": "energy-icons:mail-20-bold",
	});
}

export default Component;
