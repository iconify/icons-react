import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pdyxtzbqq.css';
import '../../css/p/peth63b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pdyxtzbqq"/><path class="peth63b4v"/></g>`,
		"fallback": "reicon:play-cricle",
	});
}

export default Component;
