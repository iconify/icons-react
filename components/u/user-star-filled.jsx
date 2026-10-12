import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe2bw_bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe2bw_bvk"/>`,
		"fallback": "lucide-extended:user-star-filled",
	});
}

export default Component;
