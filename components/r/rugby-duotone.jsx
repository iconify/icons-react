import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x00hu81jd.css';
import '../../css/j/j5b-i65-f.css';
import '../../css/k/kmstajboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x00hu81jd"/><path class="j5b-i65-f"/><path clip-rule="evenodd" class="kmstajboc"/></g>`,
		"fallback": "reicon:rugby-duotone",
	});
}

export default Component;
