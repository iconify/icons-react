import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhgsp_6sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhgsp_6sf"/>`,
		"fallback": "mdi:text-box-search",
	});
}

export default Component;
