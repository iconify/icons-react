import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4jp0udxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4jp0udxs"/>`,
		"fallback": "streamline-ultimate:road-sign-stop",
	});
}

export default Component;
