import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pc7xp6bgg.css';
import '../../css/l/llyn7xqin.css';
import '../../css/t/t7823frrc.css';
import '../../css/m/m-vyb6byy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pc7xp6bgg"/><path class="llyn7xqin"/><path class="t7823frrc"/><path class="m-vyb6byy"/></g>`,
		"fallback": "flag:mu-1x1",
	});
}

export default Component;
