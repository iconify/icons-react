import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf-xb_4oc.css';
import '../../css/h/h-eujcczx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf-xb_4oc"/><path class="h-eujcczx"/>`,
		"fallback": "energy-icons:password-20-bold",
	});
}

export default Component;
