import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzqvqw61x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzqvqw61x"/>`,
		"fallback": "lucide:lamp-wall-down",
	});
}

export default Component;
