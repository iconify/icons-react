import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tex8vbcbz.css';
import '../../css/o/ojgirtbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tex8vbcbz"/><path class="ojgirtbzk"/></g>`,
		"fallback": "reicon:search-favorite",
	});
}

export default Component;
