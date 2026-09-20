import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-7b34bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-7b34bmd"/>`,
		"fallback": "lucide:ligature",
	});
}

export default Component;
