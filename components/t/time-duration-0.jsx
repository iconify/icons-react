import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iycp5mbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iycp5mbvk"/>`,
		"fallback": "tabler:time-duration-0",
	});
}

export default Component;
