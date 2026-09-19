import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjg8k5b7a.css';
import '../../css/i/izzti6-0z.css';
import '../../css/n/nby6mkbkb.css';
import '../../css/n/nuh5gzbto.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjg8k5b7a"/><path clip-rule="evenodd" class="izzti6-0z"/><path class="nby6mkbkb"/><path clip-rule="evenodd" class="nuh5gzbto"/></g>`,
		"fallback": "glyphs:kiss-outline",
	});
}

export default Component;
