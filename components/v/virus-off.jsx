import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz73jkslc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz73jkslc"/>`,
		"fallback": "lucide:virus-off",
	});
}

export default Component;
