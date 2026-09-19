import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxppqcwvg.css';
import '../../css/q/qttbk144e.css';
import '../../css/h/h_99_tbbf.css';
import '../../css/s/sp07t1b2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxppqcwvg"/><path class="qttbk144e"/><path class="h_99_tbbf"/><path class="sp07t1b2b"/>`,
		"fallback": "ion:ios-rose",
	});
}

export default Component;
