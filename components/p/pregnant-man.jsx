import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xd2uvqgxd.css';
import '../../css/v/vdaqu21ws.css';
import '../../css/g/g2_pa2vzg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xd2uvqgxd"/><path class="vdaqu21ws"/><path class="g2_pa2vzg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pregnant-man",
	});
}

export default Component;
