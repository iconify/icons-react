import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8io8zx6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8io8zx6x"/>`,
		"fallback": "lucide:squares-exclude",
	});
}

export default Component;
