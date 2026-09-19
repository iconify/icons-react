import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gndumxbzk.css';
import '../../css/i/i6gc4eb8i.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsOralContraceptionPillsx21Negative0)" class="cuyn6tgcc"><path class="gndumxbzk"/><path clip-rule="evenodd" class="i6gc4eb8i"/></g><defs><clipPath id="healthiconsOralContraceptionPillsx21Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:oral-contraception-pillsx21-negative",
	});
}

export default Component;
