import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/ki8yqbcwf.css';
import '../../css/v/vjbjg0b1y.css';
import '../../css/s/s-6ff4b-x.css';
import '../../css/n/n2651fbqx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ki8yqbcwf"/><path class="vjbjg0b1y"/><path class="s-6ff4b-x"/><path class="n2651fbqx"/></g>`,
		"fallback": "pepicons-pencil:move-y",
	});
}

export default Component;
