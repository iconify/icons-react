import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-i69rhzg.css';
import '../../css/v/vo206n5fa.css';
import '../../css/z/z7o02f_5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-i69rhzg"/><path class="vo206n5fa"/><path class="z7o02f_5k"/></g>`,
		"fallback": "lucide-extended:mail-open-duotone",
	});
}

export default Component;
