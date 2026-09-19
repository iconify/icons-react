import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0sww7bvb.css';
import '../../css/n/n25i1etik.css';
import '../../css/b/b6f16cc2l.css';
import '../../css/o/ox_vh_ycg.css';
import '../../css/h/hsl6dub9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0sww7bvb"/><path class="n25i1etik"/><path class="b6f16cc2l"/><path class="ox_vh_ycg"/><path class="hsl6dub9a"/>`,
		"fallback": "ion:ios-volume-off",
	});
}

export default Component;
