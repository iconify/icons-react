import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r04uc_fmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r04uc_fmu"/>`,
		"fallback": "weui:location-filled",
	});
}

export default Component;
