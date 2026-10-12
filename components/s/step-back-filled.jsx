import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/airnd3bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="airnd3bbq"/>`,
		"fallback": "lucide-extended:step-back-filled",
	});
}

export default Component;
