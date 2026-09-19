import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0it0b3fh.css';
import '../../css/d/dnmg3kr7o.css';
import '../../css/p/pulfy-giw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0it0b3fh"/><path class="dnmg3kr7o"/><path clip-rule="evenodd" class="pulfy-giw"/></g>`,
		"fallback": "healthicons:medicines-outline-24px",
	});
}

export default Component;
