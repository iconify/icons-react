import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/y/yo05b4clt.css';
import '../../css/t/tj_b4ycac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="yo05b4clt"/><path class="tj_b4ycac"/></g>`,
		"fallback": "icon-park-solid:torch",
	});
}

export default Component;
