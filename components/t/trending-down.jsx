import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dz1ds7bzj.css';
import '../../css/j/j03eofbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dz1ds7bzj"/><path class="j03eofbmj"/></g>`,
		"fallback": "hugeicons:trending-down",
	});
}

export default Component;
