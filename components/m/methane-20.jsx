import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd76aibix.css';
import '../../css/o/o6l1bjq5b.css';
import '../../css/v/vr6h6mb_x.css';
import '../../css/z/zll9itmnm.css';
import '../../css/f/f4i-1bbhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd76aibix"/><path class="o6l1bjq5b"/><path class="vr6h6mb_x"/><path class="zll9itmnm"/><path class="f4i-1bbhp"/>`,
		"fallback": "energy-icons:methane-20",
	});
}

export default Component;
