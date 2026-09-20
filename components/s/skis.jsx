import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eri4cjb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eri4cjb3q"/>`,
		"fallback": "lucide-lab:skis",
	});
}

export default Component;
