import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ltvjxn4rb.css';
import '../../css/j/jazddqb5w.css';
import '../../css/e/enutafbsa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ltvjxn4rb"/><path class="jazddqb5w"/><path class="enutafbsa"/></g>`,
		"fallback": "fluent-emoji-high-contrast:joker",
	});
}

export default Component;
