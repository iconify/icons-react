import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbs-nk3gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbs-nk3gx"/>`,
		"fallback": "eos-icons:satellite-alt-outlined",
	});
}

export default Component;
