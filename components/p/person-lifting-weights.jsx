import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iw2x1acko.css';
import '../../css/r/rax87kb-g.css';
import '../../css/m/mtlu6ijui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iw2x1acko"/><path class="rax87kb-g"/><path class="mtlu6ijui"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-lifting-weights",
	});
}

export default Component;
