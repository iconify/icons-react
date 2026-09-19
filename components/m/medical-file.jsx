import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv6nqrb6l.css';
import '../../css/x/x8-zh3bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gv6nqrb6l"/><path class="x8-zh3bna"/></g>`,
		"fallback": "hugeicons:medical-file",
	});
}

export default Component;
