import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kw-auxedz.css';
import '../../css/z/z0f2gwbfj.css';
import '../../css/t/t7iq7bbbg.css';
import '../../css/u/u1_6bpb2f.css';
import '../../css/g/gr0rj4wlt.css';
import '../../css/e/ejkcxrb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kw-auxedz"/><path class="z0f2gwbfj"/><path class="t7iq7bbbg"/><path class="u1_6bpb2f"/><path class="gr0rj4wlt"/><path class="ejkcxrb6f"/></g>`,
		"fallback": "solar:list-collapse-bold",
	});
}

export default Component;
