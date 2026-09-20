import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1y3f6bsl.css';
import '../../css/o/oqas85b_h.css';
import '../../css/x/xi4oud6jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z1y3f6bsl"/><path clip-rule="evenodd" class="oqas85b_h"/><path class="xi4oud6jq"/></g>`,
		"fallback": "reicon:pill-jar-filled",
	});
}

export default Component;
