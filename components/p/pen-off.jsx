import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhaeiacqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhaeiacqc"/>`,
		"fallback": "lucide:pen-off",
	});
}

export default Component;
