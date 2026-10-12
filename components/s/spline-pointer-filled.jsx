import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd3tyqb5z.css';
import '../../css/q/qskiz0blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd3tyqb5z"/><path class="qskiz0blw"/>`,
		"fallback": "lucide-extended:spline-pointer-filled",
	});
}

export default Component;
