import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i17qfme0g.css';
import '../../css/b/bqbfr5o1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i17qfme0g"/><path class="bqbfr5o1f"/></g>`,
		"fallback": "reicon:simcard3-filled",
	});
}

export default Component;
