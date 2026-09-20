import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpno3-vgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpno3-vgt"/>`,
		"fallback": "ri:linkedin-box-line",
	});
}

export default Component;
