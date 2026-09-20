import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqmv2z_yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqmv2z_yr"/>`,
		"fallback": "thesvg-color:kamailio",
	});
}

export default Component;
