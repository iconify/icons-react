import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ek_0oyb1o.css';
import '../../css/d/d9ytzubvl.css';
import '../../css/z/ztgvytpef.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(5 3)" class="bi12bsetm"><path class="ek_0oyb1o"/><circle class="d9ytzubvl"/><circle class="ztgvytpef"/></g>`,
		"fallback": "system-uicons:speaker",
	});
}

export default Component;
