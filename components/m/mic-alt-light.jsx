import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gvf8_1bhd.css';
import '../../css/g/g2y24gmro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="gvf8_1bhd"/><path class="g2y24gmro"/></g>`,
		"fallback": "lets-icons:mic-alt-light",
	});
}

export default Component;
