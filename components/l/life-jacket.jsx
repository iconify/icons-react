import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj9zj5eja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj9zj5eja"/>`,
		"fallback": "lucide-lab:life-jacket",
	});
}

export default Component;
