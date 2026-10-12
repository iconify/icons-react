import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qskiz0blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qskiz0blw"/>`,
		"fallback": "lucide-extended:spline-filled",
	});
}

export default Component;
