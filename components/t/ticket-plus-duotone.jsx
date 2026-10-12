import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp8ajbcrx.css';
import '../../css/z/zan42xzig.css';
import '../../css/f/fjz80sb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cp8ajbcrx"/><path class="zan42xzig"/><path class="fjz80sb4k"/></g>`,
		"fallback": "lucide-extended:ticket-plus-duotone",
	});
}

export default Component;
