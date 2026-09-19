import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bsc_-kbyb.css';
import '../../css/e/ec1r3sx7z.css';
import '../../css/l/ldv_q5b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bsc_-kbyb"/><path class="ec1r3sx7z"/><path class="ldv_q5b1v"/></g>`,
		"fallback": "hugeicons:monocle-01",
	});
}

export default Component;
