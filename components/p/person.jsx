import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/llcnu82_z.css';
import '../../css/s/s0xevyb8t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="llcnu82_z"/><path class="s0xevyb8t"/></g>`,
		"fallback": "charm:person",
	});
}

export default Component;
