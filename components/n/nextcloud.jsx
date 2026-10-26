import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gach_ob4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gach_ob4x"/>`,
		"fallback": "cbi:nextcloud",
	});
}

export default Component;
