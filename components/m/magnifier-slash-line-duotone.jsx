import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/c/c5cjgzbpf.css';
import '../../css/w/w6cmsvjjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="c5cjgzbpf"/><path class="w6cmsvjjt"/></g>`,
		"fallback": "solar:magnifier-slash-line-duotone",
	});
}

export default Component;
