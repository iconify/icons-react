import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpp_p0b3f.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpp_p0b3f"/>`,
		"fallback": "lineicons:paint-bucket-alt",
	});
}

export default Component;
