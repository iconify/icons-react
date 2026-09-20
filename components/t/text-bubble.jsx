import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6izssbly.css';
import '../../css/s/slegk3slk.css';
import '../../css/s/s02d0qbow.css';
import '../../css/p/pcpc27ofz.css';
import '../../css/n/ngds8nbum.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u6izssbly"/><path clip-rule="evenodd" class="slegk3slk"/><circle class="s02d0qbow"/><circle class="pcpc27ofz"/><circle class="ngds8nbum"/></g>`,
		"fallback": "pepicons-print:text-bubble",
	});
}

export default Component;
