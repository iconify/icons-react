import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-5rj7bpn.css';
import '../../css/n/n1gclxbwz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n-5rj7bpn"/><path class="n1gclxbwz"/></g>`,
		"fallback": "glyphs:sort-alpha-up-duo",
	});
}

export default Component;
