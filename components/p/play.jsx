import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luedrwb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luedrwb0i"/>`,
		"fallback": "lucide:play",
	});
}

export default Component;
