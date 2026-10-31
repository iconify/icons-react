import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf-ei04hx.css';
import '../../css/f/faw3i3g2j.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf-ei04hx"/><path class="faw3i3g2j"/>`,
		"fallback": "tabler-flags:semaphore-signal",
	});
}

export default Component;
