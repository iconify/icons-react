import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zpoau050b.css';
import '../../css/b/b_kc-wz3n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zpoau050b"/><path class="b_kc-wz3n"/></g>`,
		"fallback": "charm:telescope",
	});
}

export default Component;
