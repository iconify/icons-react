import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/roevd8b-x.css';
import '../../css/s/spj1chbgp.css';
import '../../css/r/ra2quftzu.css';
import '../../css/j/j_hxbbc6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="roevd8b-x"/><path class="spj1chbgp"/><path class="ra2quftzu"/><path class="j_hxbbc6n"/></g>`,
		"fallback": "matita:telescope",
	});
}

export default Component;
