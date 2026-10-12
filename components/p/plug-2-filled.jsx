import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0aop1bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0aop1bqt"/>`,
		"fallback": "lucide-extended:plug-2-filled",
	});
}

export default Component;
