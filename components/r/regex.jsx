import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgv8c0_nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgv8c0_nu"/>`,
		"fallback": "lucide:regex",
	});
}

export default Component;
