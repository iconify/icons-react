import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud9jybbzp.css';
import '../../css/n/ngdudms9p.css';
import '../../css/p/p2f6vbcce.css';
import '../../css/j/jqkredbmz.css';
import '../../css/z/ztkrvpbnj.css';
import '../../css/z/zjyyu7xch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud9jybbzp"/><path class="ngdudms9p"/><path class="p2f6vbcce"/><path class="jqkredbmz"/><path class="ztkrvpbnj"/><path class="zjyyu7xch"/>`,
		"fallback": "fxemoji:phonerightarrowleft",
	});
}

export default Component;
