import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0iz04b7p.css';
import '../../css/e/efff1d6ad.css';
import '../../css/q/q7r6cxbks.css';
import '../../css/n/n_co-nb_o.css';
import '../../css/b/b3lzjpb0g.css';
import '../../css/k/klf-74avs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0iz04b7p"/><path class="efff1d6ad"/><path class="q7r6cxbks"/><path class="n_co-nb_o"/><path class="b3lzjpb0g"/><path class="klf-74avs"/></g>`,
		"fallback": "fluent-emoji-flat:mobile-phone-with-arrow",
	});
}

export default Component;
