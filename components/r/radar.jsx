import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hlnn9u8yp.css';
import '../../css/h/hm7acebzo.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/a/aoc4qh-uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hlnn9u8yp"/><path class="hm7acebzo"/><circle class="h_tsn8bxt"/><path class="aoc4qh-uh"/></g>`,
		"fallback": "lucide:radar",
	});
}

export default Component;
