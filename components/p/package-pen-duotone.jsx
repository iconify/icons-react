import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tit41_b2e.css';
import '../../css/s/sb29uacxq.css';
import '../../css/s/slyauwbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tit41_b2e"/><path class="sb29uacxq"/><path class="slyauwbqy"/></g>`,
		"fallback": "lucide-extended:package-pen-duotone",
	});
}

export default Component;
