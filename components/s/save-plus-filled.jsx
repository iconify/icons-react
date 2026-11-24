import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yismpnbbv.css';
import '../../css/i/iyen4nvbu.css';
import '../../css/i/iex7obabp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yismpnbbv"/><path class="iyen4nvbu"/><path class="iex7obabp"/>`,
		"fallback": "lucide-extended:save-plus-filled",
	});
}

export default Component;
