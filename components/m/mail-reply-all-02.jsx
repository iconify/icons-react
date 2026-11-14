import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/b/bffbfcbff.css';
import '../../css/z/z5y389h1p.css';
import '../../css/g/gjj6jlbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="bffbfcbff"/><path class="z5y389h1p"/><path class="gjj6jlbud"/></g>`,
		"fallback": "hugeicons:mail-reply-all-02",
	});
}

export default Component;
