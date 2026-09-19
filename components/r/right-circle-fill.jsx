import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofj_3-bmn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofj_3-bmn"/>`,
		"fallback": "ant-design:right-circle-fill",
	});
}

export default Component;
