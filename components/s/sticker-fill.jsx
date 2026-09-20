import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jajm5-bsz.css';
import '../../css/k/k_heijbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jajm5-bsz"/><path class="k_heijbqq"/>`,
		"fallback": "mingcute:sticker-fill",
	});
}

export default Component;
