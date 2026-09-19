import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/n/n8uvj2-sw.css';
import '../../css/r/rw4xwmbye.css';
import '../../css/x/xxiqr7b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jvtjbnueh"/><path class="n8uvj2-sw"/><path class="rw4xwmbye"/><path class="xxiqr7b7g"/></g>`,
		"fallback": "hugeicons:turntable",
	});
}

export default Component;
