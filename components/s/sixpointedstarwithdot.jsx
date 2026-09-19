import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqfm60b_p.css';
import '../../css/h/hrtye35bf.css';
import '../../css/g/gskti7b-z.css';
import '../../css/z/zpaj0ybty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqfm60b_p"/><path class="hrtye35bf"/><path class="gskti7b-z"/><circle class="zpaj0ybty"/>`,
		"fallback": "fxemoji:sixpointedstarwithdot",
	});
}

export default Component;
