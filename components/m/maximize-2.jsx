import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3wa_vrlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3wa_vrlk"/>`,
		"fallback": "lucide:maximize-2",
	});
}

export default Component;
