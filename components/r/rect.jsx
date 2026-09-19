import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djmor1xwt.css';
import '../../css/r/r0dndstuf.css';
import '../../css/s/s6u7mybjl.css';
import '../../css/z/zc3_-gfsp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djmor1xwt"/><path class="r0dndstuf"/><path class="s6u7mybjl"/><path class="zc3_-gfsp"/>`,
		"fallback": "devicon:rect",
	});
}

export default Component;
