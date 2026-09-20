import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpuuejbps.css';
import '../../css/z/zw578v39g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpuuejbps"/><rect class="zw578v39g"/></g>`,
		"fallback": "lucide:square-terminal",
	});
}

export default Component;
