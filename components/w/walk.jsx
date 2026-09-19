import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmtbg17_s.css';
import '../../css/v/vcrk3tb3p.css';
import '../../css/k/k7unic_8x.css';
import '../../css/b/b_4g56b9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmtbg17_s"/><path class="vcrk3tb3p"/><path class="k7unic_8x"/><circle class="b_4g56b9z"/>`,
		"fallback": "famicons:walk",
	});
}

export default Component;
