import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xind5rutw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xind5rutw"/>`,
		"fallback": "lucide:list-sort-ascending",
	});
}

export default Component;
