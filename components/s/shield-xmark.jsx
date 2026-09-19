import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy48pgb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy48pgb-h"/>`,
		"fallback": "iconoir:shield-xmark",
	});
}

export default Component;
