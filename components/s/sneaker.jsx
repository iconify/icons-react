import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c27ftpu8b.css';
import '../../css/b/blxwk5baf.css';
import '../../css/j/jx7pq2b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c27ftpu8b"/><path class="blxwk5baf"/><path class="jx7pq2b2n"/></g>`,
		"fallback": "hugeicons:sneaker",
	});
}

export default Component;
