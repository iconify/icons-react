import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2bteufbr.css';
import '../../css/p/p26pkt_uv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2bteufbr"/><path class="p26pkt_uv"/>`,
		"fallback": "devicon:pnpm",
	});
}

export default Component;
