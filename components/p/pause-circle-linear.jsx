import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/z/zxg6-1byk.css';
import '../../css/u/uaiwr_zjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="zxg6-1byk"/><path class="uaiwr_zjy"/></g>`,
		"fallback": "solar:pause-circle-linear",
	});
}

export default Component;
