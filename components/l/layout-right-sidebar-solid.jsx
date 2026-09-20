import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuv7_qo5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuv7_qo5p"/>`,
		"fallback": "streamline-flex:layout-right-sidebar-solid",
	});
}

export default Component;
