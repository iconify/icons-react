import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l3344obdr.css';
import '../../css/z/zv59245nm.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/a/afnjd3buc.css';
import '../../css/u/uybh1rwva.css';
import '../../css/k/ky9oie8yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l3344obdr wm-deco"/><path class="wm-deco zv59245nm"/><path class="cf3uzcrzx wm-deco"/><path class="afnjd3buc wm-k"/><path class="uybh1rwva wm-a"/><path class="ky9oie8yz wm-k"/></g>`,
		"fallback": "withicons:paste-blueprint",
	});
}

export default Component;
