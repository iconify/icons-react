import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ol2-vkq.css';
import '../../css/w/w50r1dbzr.css';
import '../../css/p/ps3dvcc7w.css';
import '../../css/r/r8c6kpbgh.css';
import '../../css/b/b3fad0bwg.css';
import '../../css/b/btbuy_03j.css';
import '../../css/e/emv-u7glx.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ol2-vkq"/><path class="w50r1dbzr"/><path class="ps3dvcc7w"/><path class="r8c6kpbgh"/><path class="b3fad0bwg"/><path class="btbuy_03j"/><path class="emv-u7glx"/>`,
		"fallback": "tabler-flags:virgin-islands",
	});
}

export default Component;
