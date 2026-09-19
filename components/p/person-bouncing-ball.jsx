import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktb9e5bgd.css';
import '../../css/v/vcfbx7bxg.css';
import '../../css/h/hax63_b0p.css';
import '../../css/i/i5i92fb0n.css';
import '../../css/i/i6i-8j1_h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktb9e5bgd"/><path class="vcfbx7bxg"/><path class="hax63_b0p"/><path class="i5i92fb0n"/><path class="i6i-8j1_h"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-bouncing-ball",
	});
}

export default Component;
