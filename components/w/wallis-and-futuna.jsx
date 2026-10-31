import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkjv3ybyr.css';
import '../../css/z/zc-w15bqg.css';
import '../../css/y/y4kj_7blv.css';
import '../../css/i/ifll36buk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkjv3ybyr"/><path class="zc-w15bqg"/><path class="y4kj_7blv"/><path class="ifll36buk"/>`,
		"fallback": "tabler-flags:wallis-and-futuna",
	});
}

export default Component;
