import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt_whcb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt_whcb-i"/>`,
		"fallback": "lucide-extended:tree-deciduous-filled",
	});
}

export default Component;
