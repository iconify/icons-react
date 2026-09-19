import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v0po0fbov.css';
import '../../css/z/z5i370bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v0po0fbov"/><path class="z5i370bbi"/></g>`,
		"fallback": "iconoir:intersect-alt",
	});
}

export default Component;
