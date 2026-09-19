import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jygacmrnh.css';
import '../../css/m/my21gqwam.css';
import '../../css/b/b7a5s8hvw.css';
import '../../css/q/qmoed6b2h.css';
import '../../css/t/tiez6k3bz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jygacmrnh"/><path class="my21gqwam"/><path class="b7a5s8hvw"/><path class="qmoed6b2h"/><path class="tiez6k3bz"/></g>`,
		"fallback": "bi:qr-code",
	});
}

export default Component;
