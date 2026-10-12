import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihe_8ubmh.css';
import '../../css/j/jfxb75zwt.css';
import '../../css/t/thtwgkblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ihe_8ubmh"/><path class="jfxb75zwt"/><path class="thtwgkblz"/></g>`,
		"fallback": "lucide-extended:library-big-duotone",
	});
}

export default Component;
