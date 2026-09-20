import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwmi_1b-r.css';
import '../../css/p/p2v3_yp0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwmi_1b-r"/><path class="p2v3_yp0j"/>`,
		"fallback": "vaadin:volume",
	});
}

export default Component;
