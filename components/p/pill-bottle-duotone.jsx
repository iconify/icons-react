import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3ttj5l_c.css';
import '../../css/i/imq2kdb-v.css';
import '../../css/l/lmjattb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3ttj5l_c"/><path class="imq2kdb-v"/><path class="lmjattb0w"/></g>`,
		"fallback": "lucide-extended:pill-bottle-duotone",
	});
}

export default Component;
