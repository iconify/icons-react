import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebs3ndmsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebs3ndmsf"/>`,
		"fallback": "lucide-lab:ironing-board",
	});
}

export default Component;
