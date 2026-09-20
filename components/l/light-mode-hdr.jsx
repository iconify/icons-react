import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nizg78b-v.css';
import '../../css/v/v_2whfbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nizg78b-v"/><path class="v_2whfbbx"/>`,
		"fallback": "streamline-freehand:light-mode-hdr",
	});
}

export default Component;
