import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw5i6qv3n.css';
import '../../css/k/kl39pwmja.css';
import '../../css/f/f923tcc0b.css';
import '../../css/o/ocm-m7pvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yw5i6qv3n"/><path clip-rule="evenodd" class="kl39pwmja"/><path class="f923tcc0b"/><path clip-rule="evenodd" class="ocm-m7pvy"/></g>`,
		"fallback": "healthicons:vih-outline-24px",
	});
}

export default Component;
