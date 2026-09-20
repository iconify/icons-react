import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i92azyepm.css';
import '../../css/l/le-21_9cz.css';
import '../../css/t/t53x35v6o.css';
import '../../css/l/lzd7xpbas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i92azyepm"/><path class="le-21_9cz"/><path class="t53x35v6o"/><path class="lzd7xpbas"/></g>`,
		"fallback": "streamline-flex-color:sun",
	});
}

export default Component;
