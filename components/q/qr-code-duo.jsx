import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lsfh3fvrg.css';
import '../../css/k/kucpkacrh.css';
import '../../css/k/kcag22w9s.css';
import '../../css/e/e1ojx1b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lsfh3fvrg"/><path class="kucpkacrh wm-a"/><path class="kcag22w9s"/><path class="e1ojx1b4k wm-a"/></g>`,
		"fallback": "withicons:qr-code-duo",
	});
}

export default Component;
