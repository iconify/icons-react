import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs6hykbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs6hykbtm"/>`,
		"fallback": "cbi:nextcloud",
	});
}

export default Component;
