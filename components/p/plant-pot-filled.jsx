import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta53_k63o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta53_k63o"/>`,
		"fallback": "lucide-extended:plant-pot-filled",
	});
}

export default Component;
