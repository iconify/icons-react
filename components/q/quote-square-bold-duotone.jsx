import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/z/z55blto9r.css';
import '../../css/x/x3o6crc4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="z55blto9r"/><path class="x3o6crc4k"/></g>`,
		"fallback": "solar:quote-square-bold-duotone",
	});
}

export default Component;
