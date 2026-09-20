import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfvqjac5l.css';
import '../../css/i/isld4f3te.css';
import '../../css/v/v8y1e5mbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bfvqjac5l"/><path class="isld4f3te"/><path class="v8y1e5mbw"/></g>`,
		"fallback": "streamline-ultimate:space-astronaut-alternate",
	});
}

export default Component;
