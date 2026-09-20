import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rab3i_pim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rab3i_pim"/>`,
		"fallback": "reicon:smallcaps-filled",
	});
}

export default Component;
