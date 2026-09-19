import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akajx_bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akajx_bpu"/>`,
		"fallback": "grommet-icons:new",
	});
}

export default Component;
