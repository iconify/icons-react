import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e29c2gpyz.css';
import '../../css/b/b53bnabsh.css';
import '../../css/k/kmi_pfcpe.css';
import '../../css/i/ix8qktuzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e29c2gpyz"/><path class="b53bnabsh"/><path class="kmi_pfcpe"/><path class="ix8qktuzg"/></g>`,
		"fallback": "solar:move-bold",
	});
}

export default Component;
